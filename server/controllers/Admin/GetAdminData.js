import asyncHandler from "express-async-handler";
import prisma from "../../config/prisma.js";

export const GetAdminData = asyncHandler(async (req, res) => {

  const adminData = await prisma.admin.findMany({
    where: {
      id: req.admin.id,
    },
  });
  res.status(200).json({
    success: true,
    error: null,
    adminData,
  });
});
