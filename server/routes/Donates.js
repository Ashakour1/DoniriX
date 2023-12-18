import express from "express";
import { getAlldonates } from "../controllers/getDonates.js";
const router = express.Router();


router.get("/",getAlldonates)

export default router;