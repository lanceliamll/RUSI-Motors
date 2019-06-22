const express = require("express");
const connectDB = require("../../config/db");

const app = express();

//Connect to DB
connectDB();

//Middleware
app.use(express.json({ extended: false }));

//Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/motors", require("./routes/api/motors"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
