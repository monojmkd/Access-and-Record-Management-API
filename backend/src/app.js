const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check (always useful)
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Routes go here later:
// app.use('/api/v1/auth', authRoutes)
// app.use('/api/v1/records', recordRoutes)

module.exports = app;
