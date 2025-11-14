const express = require("express");
const AppDataSource = require("./config/data-source");
const userRoutes = require("./route/userRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    app.listen(process.env.PORT, () => {
      console.log("Server running on port", process.env.PORT);
    });
  })
  .catch((error) => console.log(error));