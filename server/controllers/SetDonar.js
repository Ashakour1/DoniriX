import asyncHandler from "express-async-handler";
import prisma from "../config/prisma.js";

export const setDonar = asyncHandler(async (req, res) => {
  console.log(req.body);

  const {
    name,
    email,
    phone,
    sex,
    age,
    weight,
    address,
    nextOfKin,
    hp,
    bloodType,
    amount,
  } = req.body;

  // Check if all fields are filled
  if (
    !name ||
    !email ||
    !phone ||
    !sex ||
    !age ||
    !weight ||
    !address ||
    !nextOfKin ||
    !hp ||
    !bloodType
  ) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  if (age < 18 || age > 50) {
    res.status(400);
    throw new Error("You are not eligible to donate blood");
  }

  if (weight < 50) {
    res.status(400);
    throw new Error("You are underweight");
  }

  if (phone.length < 0) {
    res.status(400);
    throw new Error("Please enter a valid phone number");
  }

  // Check if donor exists
  const donarExists = await prisma.donar.findUnique({
    where: {
      email,
    },
  });

  // If donor exists
  if (donarExists) {
    const { updatedAt } = donarExists;

    // Check if last donation was more than 3 months ago
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

    if (updatedAt > threeMonthsAgo) {
      res.status(400);
      throw new Error(
        "You cannot donate yet. Please wait until 3 months have passed since your last donation."
      );
    }
  }

  // Create donor
  const Donar = await prisma.donar.create({
    data: {
      name,
      email,
      phone : Number(phone),
      sex,
      age: Number(age),
      weight: Number(weight),
      address,
      nextOfKin,
      hp,
      bloodType,
      amount: Number(amount),
      status: "pending",
    },
  });

  // Return donor response
  res.status(201).json({
    success: true,
    error: false,
    message: "Registered Successfully",
  });
});
