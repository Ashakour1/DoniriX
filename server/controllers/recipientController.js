import asyncHandler from "express-async-handler";
import prisma from "../config/prisma.js";

// @desc    Create a new recipient
// @route   POST /api/recipients
// @access  Private

// name  String
// email     String   @unique
// phone     String
// amount Int
// Address String
// bloodType     String
// status    String
// dateOfBirth String
// preferredHospital String
//  reasonForBloodNeed String

const createRecipient = asyncHandler(async (req, res) => {
  console.log(req.body);
  const {
    name,
    email,
    phone,
    amount,
    address,
    bloodType,
    dateOfBirth,
    preferredHospital,
    reasonForBloodNeed,
  } = req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !amount ||
    !address ||
    !bloodType ||
    !dateOfBirth ||
    !preferredHospital ||
    !reasonForBloodNeed
  ) {
    res.status(400);
    throw new Error("please fill all the fields");
  }

  const recipient = await prisma.recipient.create({
    data: {
      name,
      email,
      phone,
      amount: Number(amount),
      address,
      bloodType,
      status: "pending",
      dateOfBirth,
      preferredHospital,
      reasonForBloodNeed,
    },
  });

  if (recipient) {
    res.status(201).json({
      message: "Recipient created successfully",
      data: recipient,
    });
  } else {
    res.status(400);
    throw new Error("Invalid recipient data");
  }
});

// @desc    Get all recipients

// @route   GET /api/recipients
// @access  Private
const getRecipients = asyncHandler(async (req, res) => {
  const recipients = await prisma.recipient.findMany();
  res.json(recipients);
});

// @desc    Get recipient by ID
// @route   GET /api/recipients/:id
// @access  Private
const getRecipientById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const recipient = await prisma.recipient.findUnique({
    where: {
      id,
    },
  });

  if (recipient) {
    res.json(recipient);
  } else {
    res.status(404);
    throw new Error("Recipient not found");
  }
});

// @desc    Update recipient by ID
// @route   PUT /api/recipients/:id
// @access  Private
const updateRecipient = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    phone,
    amount,
    Address,
    bloodType,
    status,
    dateOfBirth,
    preferredHospital,
    reasonForBloodNeed,
  } = req.body;

  const recipient = await prisma.recipient.update({
    where: {
      id,
    },
    data: {
      name,
      email,
      phone,
      amount,
      Address,
      bloodType,
      status,
      dateOfBirth,
      preferredHospital,
      reasonForBloodNeed,
    },
  });

  if (recipient) {
    res.json({
      message: "Recipient updated successfully",
      data: recipient,
    });
  } else {
    res.status(404);
    throw new Error("Recipient not found");
  }
});

// @desc    Delete recipient by ID
// @route   DELETE /api/recipients/:id
// @access  Private
const deleteRecipient = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const recipient = await prisma.recipient.delete({
    where: {
      id,
    },
  });

  if (recipient) {
    res.json({ message: "Recipient deleted successfully" });
  } else {
    res.status(404);
    throw new Error("Recipient not found");
  }
});

export {
  createRecipient,
  getRecipients,
  getRecipientById,
  updateRecipient,
  deleteRecipient,
};
