import asyncHandler from "express-async-handler";
import prisma from "../../config/prisma.js";
import bcrypt from "bcrypt"

export const RegisterAdmin = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const adminExists = await prisma.admin.findUnique({
    where: {
      email,
    },
  });

    if (adminExists) {
        res.status(400);
        throw new Error("Admin already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // create admin
    const admin = await prisma.admin.create({
        data : {
            name,
            email,
            password : hashedPassword,
        }
    })

    // return response 

    res.status(201).json({
        success: true,
        error : null,
        message : "Admin created successfully",
    })
});
