const express = require("express");
const connectDB = require("../../config/db");
const app = express();
const cors = require("cors");

//Socket IO
//const http = require("http");
// const socketIO = require("socket.io");
// const server = http.createServer(app);
// const io = socketIO(server);

//Connect to DB
connectDB();

//Middleware
app.use(express.json({ extended: false }));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000"
  })
);

//Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/motors", require("./routes/api/motors"));
app.use("/api/inquiry", require("./routes/api/inquiry"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
