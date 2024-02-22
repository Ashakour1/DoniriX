import asyncHandler from "express-async-handler";
import prisma from "../config/prisma.js";

export const setDonar = asyncHandler(async (req, res) => {
  console.log(req.body);
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

  // checking phone exists
  // const phoneCount = await prisma.donar.count({
  //   where: {
  //     phone: phone,
  //   },
  // });

  // // if exists phone
  // if (phoneCount) {
  //   res.status(400);
  //   throw new Error("your phone is Already exists");
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
      fullname,
      email,
      phone: Number(phone),
      age: Number(age),
      weight: Number(weight),
      address,
      motherNumber: Number(motherNumber),
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
