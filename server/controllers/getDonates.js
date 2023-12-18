import asyncHandler from "express-async-handler";

import prisma from "../config/prisma.js";

export const getAlldonates = asyncHandler(async (req, res) => {
  // get all donates
  const donates = await prisma.donar.findMany();

  // throw error if no donates found
  if (donates.length === 0) {
    res.status(404);
    throw new Error("No donates found");
  }

  // return donates results
  res.status(200).json({
    success: true,
    error: null,
    results: {
      data: {
        donates,
      },
    },
  });
});
