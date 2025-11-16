const express = require("express");
const AppDataSource = require("./config/data-source");
const userRoutes = require("./route/userRoutes");
const authRoutes = require("./route/authRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/auth", authRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(process.env.PORT, () => {
      console.log("Server running on port", process.env.PORT);
    });
  })
  .catch((error) => console.log(error));