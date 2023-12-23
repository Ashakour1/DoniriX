import express from "express";
import { RegisterAdmin } from "../controllers/Admin/RegisterAdminController.js";
import { loginAdmin } from "../controllers/Admin/LoginAdmin.js";
import { GetAdminData } from "../controllers/Admin/GetAdminData.js";
const router = express.Router();


router.post("/", RegisterAdmin);
router.post("/login", loginAdmin);
router.get("/data", GetAdminData);

export default router;