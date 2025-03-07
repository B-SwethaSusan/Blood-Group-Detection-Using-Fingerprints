const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Form = require("./models/FormModel"); // ✅ Ensure correct import

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const MONGO_URI = "mongodb+srv://janu:Jahnavi9908@projects.o3gjm.mongodb.net/db"; // Your MongoDB URI
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Route to handle form submission
app.post("/submit", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // ✅ Ensure `new Form(...)` is called correctly
    const newForm = new Form({ name, email, password });
    await newForm.save();
    
    res.json({ password: "Form submitted successfully!" });
  } catch (err) {
    console.error("Error saving form data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ LOGIN ROUTE
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Log input values to debug
    console.log("Login Attempt:", { email, password });

    // Check if the user exists
    const user = await Form.findOne({ email });

    // Debugging log
    console.log("User Found in DB:", user);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the password matches
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid password" });
    }

    res.json({ message: "Login successful!" });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

