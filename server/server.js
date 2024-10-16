import express from "express";
import Donars from "./routes/DonarRoutes.js";
import Admin from "./routes/AdminRoutes.js";
import ErrorHandler from "./middlewares/errorMiddleware.js";
import dotenv from "dotenv";
import sendEmail from "./routes/sendEmailRoutes.js";
import cors from "cors";
import RecipientRouter from "./routes/recipientRoutes.js";
dotenv.config();
const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/donars", Donars);
app.use("/api/recipients",RecipientRouter)
app.use("/api/admin", Admin);

app.get("*", (req, res) => {
  res.status(404);
  throw new Error("Page not found");
});

app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
