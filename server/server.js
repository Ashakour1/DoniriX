import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my server",
  });
});

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
