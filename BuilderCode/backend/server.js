const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


// Load env variables
dotenv.config();


const app = express();


// Middleware
app.use(cors());

app.use(express.json());


// Database
const connectDB = require("./config/db");

connectDB();


// Routes
const projectRoutes = require("./routes/projectRoutes");
const authRoutes = require("./routes/authRoutes");


app.use(
  "/api/auth",
  authRoutes
);


app.use(
  "/api/projects",
  projectRoutes
);


// Test Route
app.get("/", (req, res) => {

  res.json({
    message: "DesignForge API Running"
  });

});


// Server Start

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

  console.log(
    `Server running on ${PORT}`
  );

});