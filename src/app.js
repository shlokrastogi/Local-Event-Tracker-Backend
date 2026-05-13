require("dotenv").config();

const express = require("express");
const connectDB = require("./config/database");

const app = express();
app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   }),
// );

// const authRoutes = require("./routes/auth");

// app.use("/", authRouter);

connectDB()
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });
