import asyncHandler from "express-async-handler";
import prisma from "../../config/prisma.js";

export const UpdateAdmin = asyncHandler(async (req, res) => {
  // get id from params
  const userId = req.admin.id;
  // get data from body
  const { name, email, password } = req.body;

  // check if admin exists
  const adminExists = await prisma.admin.findUnique({
    where: {
      id : Number(userId)
    },
  });

  // check if admin exists
  if (!adminExists) {
    res.status(404);
    throw new Error("Admin not found");
  }

  // update admin

  const UpdatedAdmin = await prisma.admin.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      email,
      password,
    },
  });

  // return updated admin

  res.status(200).json({
    success: true,
    error: false,
    message: "Admin updated successfully",
  });
});
