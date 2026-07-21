const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

// CORS Setup for Vercel
app.use(cors({
  origin: "https://design-forge-six.vercel.app"
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json());

// 🛠️ ASYNC MIDDLEWARE: Har request aane par check karega ki DB connected hai ya nahi
app.use(async (req, res, next) => {
  try {
    await connectDB(); // Async function call
    next();
  } catch (err) {
    res.status(500).json({ error: "Database connection failed" });
  }
});

// Routes
const projectRoutes = require("./routes/projectRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "DesignForge API Running" });
});

// 🚀 Local running ke liye condition (Vercel pe ye part skip ho jayega)
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running locally on port ${PORT}`);
  });
}

// Vercel ke liye app export karna zaroori hai
module.exports = app;
