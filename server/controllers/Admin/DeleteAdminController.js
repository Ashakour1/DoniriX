import AsyncHandler from "express-async-handler";
import prisma from "../../config/prisma.js";

export const deleteAdmin = AsyncHandler(async (req, res) => {
  // get id from params
  const { id } = req.params;

  // check if admin exists
  const adminExists = await prisma.admin.findUnique({
    where: {
      id: Number(id),
    },
  });

  // check if admin exists
  if (!adminExists) {
    res.status(404);
    throw new Error("Admin not found");
  }

  // delete admin
  const deletedAdmin = await prisma.admin.delete({
    where: {
      id: Number(id),
    },
  });

  // return response
  res.status(200).json({
    success: true,
    error: false,
    message: "Admin deleted successfully",
  });
});
