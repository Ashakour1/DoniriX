import express from "express";
import Donars from "./routes/DonarRoutes.js";
import Admin from "./routes/AdminRoutes.js";
import ErrorHandler from "./middlewares/errorMiddleware.js";
import dotenv from "dotenv";
import cors from "cors";
import RecipientRouter from "./routes/recipientRoutes.js";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "*", // Allow all origins (adjust if needed)
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define your routes
app.use("/api/donors", Donars);
app.use("/api/recipients", RecipientRouter);
app.use("/api/admin", Admin);

// Define a route for sending emails (if needed)
app.get("/api/send-email", (req, res) => {
  res.send("Email sent");
});

// Catch-all 404 handler for undefined routes
app.get("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

// Error handler middleware
app.use(ErrorHandler);

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
