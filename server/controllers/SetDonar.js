import asyncHandler from "express-async-handler";
import prisma from "../config/prisma.js";

export const setDonar = asyncHandler(async (req, res) => {
  // console.log(req.body);
  const {
    fullname,
    email,
    phone,
    age,
    weight,
    address,
    motherNumber,
    bloodType,
  } = req.body;

  if (
    !fullname ||
    !email ||
    !phone ||
    !age ||
    !weight ||
    !address ||
    !motherNumber ||
    !bloodType
  ) {
    res.status(404);
    throw new Error("Please fill all the fields");
  }

  if (age < 18 || age > 50) {
    res.status(400);
    throw new Error("You are not eligible to donate blood");
    
  }
  if(typeof age == "string" ){
    res.status(400);
    throw new Error("Please enter a valid age");
  }

  if (weight < 50) {
    res.status(400);
    throw new Error("You are underweight");
  }
  if(typeof weight == "string" ){
    res.status(400);
    throw new Error("Please enter a valid weight");
  }

  if (phone.length < 0) {
    res.status(400);
    throw new Error("Please enter a valid phone number");
  }

  if(typeof phone == "string" ){
    res.status(400);
    throw new Error("Please enter a valid phone number");
  }

  if (motherNumber.length < 0) {
    res.status(400);
    throw new Error("Please enter a valid mother phone number");
  }

  if(typeof motherNumber == "string" ){
    res.status(400);
    throw new Error("Please enter a valid mother phone number");
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
      fullname,
      email,
      phone,
      age: Number(age),
      weight: Number(weight),
      address,
      motherNumber,
      bloodType,
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
