import AsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma.js";

export const AuthMiddleware = AsyncHandler(async (req, res, next) => {
  // get token from header
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // get token from header
      token = req.headers.authorization.split(" ")[1];

      // verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("decod", decoded);

      // find admin
      const admin = await prisma.admin.findUnique({
        where: {
          id: decoded.id,
        },
      });

      req.admin = admin;

      if (!admin) {
        res.status(401).json({
          success: false,
          error: "Not authorized to access this route",
        });
      }
      next();
    } catch (error) {
      res.status(401).json({
        success: false,
        error: "Not authorized to access this route",
        adminData: null,
      });
    }
  }
  if (!token) {
    res.status(401).json({
      success: false,
      error: "Not authorized No token ",
      adminData: null,
    });
  }
});
