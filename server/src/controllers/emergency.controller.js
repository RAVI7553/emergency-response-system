import Emergency from "../models/emergency.model.js";

export const createEmergency = async (req, res) => {
  try {
    const { type, location } = req.body;

    const newEmergency = new Emergency({
      user: req.user.userId, // from JWT
      type,
      location,
    });

    await newEmergency.save();

    res.status(201).json({
      message: "Emergency created successfully",
      emergency: newEmergency,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

export const getAllEmergencies = async (req, res) => {
  try {
    const emergencies = await Emergency.find().populate("user", "name email");

    res.status(200).json({
      count: emergencies.length,
      emergencies,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
export const acceptEmergency = async (req, res) => {
  try {
    const { id } = req.params;

    const emergency = await Emergency.findById(id);

    if (!emergency) {
      return res.status(404).json({
        message: "Emergency not found",
      });
    }

    //  Already accepted check (important)
    if (emergency.status !== "Pending") {
      return res.status(400).json({
        message: "Emergency already assigned",
      });
    }

    // Assign driver + update status
    emergency.status = "Assigned";
    emergency.assignedDriver = req.user.userId;

    await emergency.save();

    res.status(200).json({
      message: "Emergency accepted",
      emergency,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
export const completeEmergency = async (req, res) => {
  try {
    const { id } = req.params;

    const emergency = await Emergency.findById(id);

    if (!emergency) {
      return res.status(404).json({
        message: "Emergency not found",
      });
    }

    //  Only assigned driver can complete
    if (emergency.assignedDriver.toString() !== req.user.userId) {
      return res.status(403).json({
        message: "You are not assigned to this emergency",
      });
    }

    //  Must be assigned first
    if (emergency.status !== "Assigned") {
      return res.status(400).json({
        message: "Emergency is not in assigned state",
      });
    }

    //  Update
    emergency.status = "Completed";

    await emergency.save();

    res.status(200).json({
      message: "Emergency completed successfully",
      emergency,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
