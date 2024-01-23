import asyncHandler from "express-async-handler";
import prisma from "../../config/prisma.js";
import bcrypt from "bcrypt";
import { generateToken } from "../tokens/GenerateToken.js";

export const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  // check if admin exists
  const adminExists = await prisma.admin.findUnique({
    where: {
      email,
    },
  });

  if(!adminExists){
      res.status(400);
      throw new Error("Admin does not exists");
  }

  // check if password matches

  const passwordMatches = await bcrypt.compare(password,adminExists.password);

    if(!passwordMatches){
        res.status(400);
        throw new Error("Invalid password");
    }

    // return response
    res.status(200).json({
        success : true,
        error : null,
        message : "Admin logged in successfully",
        token : generateToken(adminExists.id)
    })
});
