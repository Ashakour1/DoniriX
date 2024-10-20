import {
  createRecipient,
  getRecipientById,
  getRecipients,
  deleteRecipient,
  updateRecipient,
} from "../controllers/recipientController.js";

import { AuthMiddleware } from "../middlewares/authMiddleware.js";
import express from "express";
const RecipientRouter = express.Router();

RecipientRouter.route("/")
  .get(AuthMiddleware, getRecipients)
  .post(AuthMiddleware, createRecipient);
RecipientRouter.route("/:id")
  .get(AuthMiddleware, getRecipientById)
  .put(AuthMiddleware, updateRecipient)
  .delete(AuthMiddleware, deleteRecipient);

export default RecipientRouter;
