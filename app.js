const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const logger = require("./middleware/logger");

const app = express();
const PORT = process.env.PORT || 3000;

// Built-in middleware to read JSON request bodies
app.use(express.json());

// Custom request logger
app.use(logger);

// Welcome route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Student Management REST API",
    endpoints: {
      students: "/students",
      studentById: "/students/:id"
    }
  });
});

// Modular student routes
app.use("/students", studentRoutes);

// Handle invalid JSON and other request errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ success: false, message: "Invalid JSON format" });
  }

  console.error("Server error:", err.message);
  return res.status(500).json({ success: false, message: "Internal Server Error" });
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = app;
