import asyncHandler from "express-async-handler";
import prisma from "../config/prisma.js";

export const getDonar = asyncHandler(async (req, res) => {
  // get donar id from params
  const { id } = req.params;

  // check if donar exists
  const donar = await prisma.donar.findUnique({
    where: {
      id,
    },
  });

  if (!donar) {
    res.status(404);
    throw new Error("Donar not exists");
  }

  // return donar
  res.status(200).json({
    success: true,
    error: null,
    data: {
      donar,
    },
  });
});
