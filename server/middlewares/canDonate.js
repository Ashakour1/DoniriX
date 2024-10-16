import asyncHandler from "express-async-handler";
import prisma from "../config/prisma.js";

export const canDonate = asyncHandler(async (req, res, next) => {
  const { email } = req.body; // Get donor email from request body

  // Fetch the donor from the database using the correct unique field syntax
  const donor = await prisma.donar.findUnique({
    where: { email: email }, // Use this correct syntax
  });

  // If donor does not exist, return a 404 error
  if (!donor) {
    return res.status(404).json({
      success: false,
      message: "Donor not found.",
    });
  }

  // Check if the donor has made any donations
  if (donor.donations === 0) {
    req.canDonate = true; // Can donate if no previous donations
    return next(); // Proceed to the next middleware
  }

  // Get the date of the last donation using the updatedAt field
  const lastDonationDate = new Date(donor.updatedAt);

  // Calculate the date three months ago
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3); // Subtract 3 months from current date

  // Determine if the donor can donate again
  if (lastDonationDate <= threeMonthsAgo) {
    req.canDonate = true; // Can donate if last donation was more than 3 months ago
  } else {
    req.canDonate = false; // Cannot donate if it's less than 3 months
  }

  next(); // Always call next to proceed
});
