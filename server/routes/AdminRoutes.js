import express from "express";
import { RegisterAdmin } from "../controllers/Admin/RegisterAdminController.js";
import { loginAdmin } from "../controllers/Admin/LoginAdmin.js";
import { GetAdminData } from "../controllers/Admin/GetAdminData.js";
import { UpdateAdmin } from "../controllers/Admin/UpdateAdminController.js";
import { deleteAdmin } from "../controllers/Admin/DeleteAdminController.js";
import { AuthMiddleware } from "../middlewares/authMiddleware.js";
const router = express.Router();


router.post("/", RegisterAdmin);
router.post("/login", loginAdmin);
router.get("/data",GetAdminData);
router.put("/:id", AuthMiddleware,UpdateAdmin);
router.delete("/:id", AuthMiddleware,deleteAdmin);

export default router;