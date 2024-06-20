import asyncHandler from "express-async-handler";
import prisma from "../../config/prisma.js";

export const GetAdminData = asyncHandler(async (req, res) => {

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
