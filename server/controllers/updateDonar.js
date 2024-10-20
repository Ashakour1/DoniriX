import asyncHandler from "express-async-handler";
import prisma from "../config/prisma.js";

export const updateDonar = asyncHandler(async (req, res) => {
  // get donar id from params
  const { id } = req.params;

  // get donar data from body
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
    status,
    amount,
    location,
  } = req.body;

  // check if donar exists
  const donarExists = await prisma.donar.findUnique({
    where: {
      id,
    },
  });

  if (!donarExists) {
    res.status(404);
    throw new Error("Donar not exists");
  }
  // update donar

  const updatedDonar = await prisma.donar.update({
    where: {
      id,
    },
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
      status,
      amount: Number(amount),
      location,
    },
  });

  // return updated donar

  res.status(200).json({
    success: true,
    error: false,
    message: "Updated successfully",
  });
});
