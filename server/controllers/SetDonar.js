import asyncHandler from "express-async-handler";
import prisma from "../config/prisma.js";

export const setDonar = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    phone,
    age,
    weight,
    address,
    motherName,
    fatherName,
    bloodType,
  } = req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !age ||
    !weight ||
    !address ||
    !motherName ||
    !fatherName ||
    !bloodType
  ) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  // checking phone exists
  const phoneCount = await prisma.donar.count({
    where: {
      phone: phone,
    },
  });

  // if exists phone
  if (phoneCount) {
    res.status(400);
    throw new Error("your phone is Already exists");
  }

  // check if donar exists
  const donarExists = await prisma.donar.findUnique({
    where: {
      email,
    },
  });

  // if donar exists
  if (donarExists) {
    res.status(400);
    throw new Error("Donar already exists");
  }

  // create donar
  const Donar = await prisma.donar.create({
    data: {
      name,
      email,
      phone,
      age: parseInt(age),
      weight: parseInt(weight),
      address,
      motherName,
      fatherName,
      bloodType,
      status: "pending",
    },
  });

  // return donar response
  res.status(201).json({
    success: true,
    error: false,
    results: {
      data: "Donar register successfully",
    },
  });
});
