import {
  createRecipient,
  getRecipientById,
  getRecipients,
  deleteRecipient,
  updateRecipient,
} from "../controllers/recipientController.js";
import express from "express";
const RecipientRouter = express.Router();

RecipientRouter.route("/").get(getRecipients).post(createRecipient);
RecipientRouter.route("/:id")
  .get(getRecipientById)
  .put(updateRecipient)
  .delete(deleteRecipient);

export default RecipientRouter;
