import asyncHandler from "express-async-handler";
import prisma from "../config/prisma.js";

export const setDonar = asyncHandler(async (req, res) => {
  console.log(req.body);

  // fullname  String
  // email     String   @unique
  // phone     String
  // age       Int
  // weight    Float
  // address  String
  // nextOfkin String
  // hp String
  // bloodType     String
  // status    String
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

  // check if all fields are filled
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

  // if (motherNumber.length < 0) {
  //   res.status(400);
  //   throw new Error("Please enter a valid mother phone number");
  // }

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

  // return donar response
  res.status(201).json({
    success: true,
    error: false,
    message: "You are successfully registered as a donar",
  });
});
