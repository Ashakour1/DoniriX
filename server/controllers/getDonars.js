import asyncHandler from "express-async-handler";

import prisma from "../config/prisma.js";

export const getAllDonars = asyncHandler(async (req, res) => {
  // get all donates

  const qBlood = req.query.bloodType;
  let donars;

  try {
    if (qBlood) {
      donars = await prisma.donar.findMany({
        where: {
          bloodType,
        },
      });
    } else {
      donars = await prisma.donar.findMany();
    }
  } catch (error) {
    res.status(404);
    throw new Error("Donar not exists");
  }

  // return donates results
  res.status(200).json({
    success: true,
    error: null,
    results: {
      data: {
        donars,
      },
    },
  });
});
