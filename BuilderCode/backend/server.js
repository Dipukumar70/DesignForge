const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Database connect (sirf ek baar)
connectDB();

// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://design-forge-six.vercel.app"
  ],
  credentials: true
}));

app.use(express.json());

// Routes
const projectRoutes = require("./routes/projectRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "DesignForge API Running" });
});

// Local server only
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
