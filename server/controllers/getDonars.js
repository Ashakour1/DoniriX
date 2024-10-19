import asyncHandler from "express-async-handler";
import prisma from "../config/prisma.js";

export const getAllDonars = asyncHandler(async (req, res) => {
  // Get blood type from query parameters
  const qBlood = req.query.bloodType;

  let donars;

  try {
    // Check if a blood type was provided in the query
    if (qBlood) {
      // Use the qBlood variable to filter donors by blood type
      donars = await prisma.donar.findMany({
        where: {
          bloodType: qBlood, // Correctly use qBlood here
        },
      });
    } else {
      // Fetch all donors if no blood type is specified
      donars = await prisma.donar.findMany();
    }
  } catch (error) {
    // Handle the error gracefully
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching donors.",
      error: error.message,
    });
    return; // Exit the function after sending the response
  }

  // Return the results
  res.status(200).json({
    success: true,
    error: null,
    data: {
      donars,
    },
  });
});
