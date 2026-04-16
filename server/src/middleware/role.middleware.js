export const allowRoles = (...roles) => {
  return (req, res, next) => {
    // req.user comes from verifyToken middleware
    const userRole = req.user.role;

    if (!roles.includes(userRole)) {
      return res.status(403).json({
        message: "Access denied. You do not have permission.",
      });
    }

    next();
  };
};
