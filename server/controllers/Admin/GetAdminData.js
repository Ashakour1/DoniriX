import asyncHandler from "express-async-handler";
import prisma from "../../config/prisma.js";

export const GetAdminData = asyncHandler(async (req, res) => {
  const { id } = req.admin;

  const loginAdmin = await prisma.admin.findUnique({
    where: {
      id: Number(id),
    },
  });

  /// get admin data
  const adminData = await prisma.admin.findMany({
    where: {
      id: Number(id),
    },
  });

  res.status(200).json({
    success: true,
    adminData: adminData,
  });

  // return response
});
