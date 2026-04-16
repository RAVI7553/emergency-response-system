import mongoose from "mongoose";

const emergencySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["Accident", "Medical", "Fire"],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Assigned", "Completed"],
      default: "Pending",
    },
    // add inside schema
    assignedDriver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Emergency = mongoose.model("Emergency", emergencySchema);

export default Emergency;
