import express from "express";
import { getAllDonars } from "../controllers/getDonars.js";
import { setDonar } from "../controllers/SetDonar.js";
import { updateDonar } from "../controllers/updateDonar.js";
import { deleteDonar } from "../controllers/deleteDonar.js";
import { AuthMiddleware } from "../middlewares/authMiddleware.js";
import { getDonar } from "../controllers/getDonor.js";
// import { canDonate } from "../middlewares/canDonate.js";

const router = express.Router();

/** 
 * @description     Get all donars
 * @method          GET
 * @route           GET /api/donars
 * @access          Private only admin can access 
 *@returns          All donars
 
*/
router.get("/", AuthMiddleware, getAllDonars);
router.get("/:id", AuthMiddleware, getDonar);

router.post("/", setDonar);

router.put("/:id", AuthMiddleware, updateDonar);

router.delete("/:id", AuthMiddleware, deleteDonar);

export default router;
