import asyncHandler from "express-async-handler";
import prisma from "../config/prisma.js";

export const deleteDonar = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // check if donar exists
  const donarExists = await prisma.donar.findUnique({
    where: {
      id: Number(id),
    },
  });

  // throw error if donar not exists
  if (!donarExists) {
    res.status(404);
    throw new Error("Donar not exists");
  }

  // delete donar

  const deletedDonar = await prisma.donar.delete({
    where: {
      id: Number(id),
    },
  });

  //   return deleted donar

  res.status(200).json({
    success: true,
    error: false,
    message: "Donar deleted successfully",
  });
});
