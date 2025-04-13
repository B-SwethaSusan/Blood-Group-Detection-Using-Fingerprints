// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const Form = require("./models/FormModel"); // ✅ Ensure correct import

// const app = express();
// const PORT = 8000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // MongoDB Connection
// const MONGO_URI = "mongodb+srv://janu:Jahnavi9908@projects.o3gjm.mongodb.net/db"; // Your MongoDB URI
// mongoose
//   .connect(MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// // ✅ Route to handle form submission
// app.post("/submit", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     // ✅ Ensure `new Form(...)` is called correctly
//     const newForm = new Form({ name, email, password });
//     await newForm.save();
    
//     res.json({ password: "Form submitted successfully!" });
//   } catch (err) {
//     console.error("Error saving form data:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // ✅ LOGIN ROUTE
// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Log input values to debug
//     console.log("Login Attempt:", { email, password });

//     // Check if the user exists
//     const user = await Form.findOne({ email });

//     // Debugging log
//     console.log("User Found in DB:", user);

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Check if the password matches
//     if (user.password !== password) {
//       return res.status(401).json({ error: "Invalid password" });
//     }

//     res.json({ message: "Login successful!" });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const { spawn } = require("child_process");
// const path = require("path");

// const Form = require("./models/FormModel");

// const app = express();
// const PORT = 8000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // MongoDB Connection
// const MONGO_URI = "mongodb+srv://janu:Jahnavi9908@projects.o3gjm.mongodb.net/db";
// mongoose
//   .connect(MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// // ✅ Multer setup for image uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Ensure this directory exists
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const upload = multer({ storage });

// // ✅ Signup Route
// app.post("/submit", async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const newUser = new Form({ name, email, password });
//     await newUser.save();
    
//     res.json({ message: "User registered successfully!" });
//   } catch (err) {
//     console.error("Error in signup:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // ✅ Login Route
// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     console.log("Login Attempt:", { email, password });

//     const user = await Form.findOne({ email });

//     console.log("User Found in DB:", user);

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     if (user.password !== password) {
//       return res.status(401).json({ error: "Invalid password" });
//     }

//     res.json({ message: "Login successful!" });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // ✅ Blood Group Prediction Route
// // app.post("/predict", upload.single("image"), (req, res) => {
// //   if (!req.file) {
// //     console.error("❌ No file uploaded!");
// //     return res.status(400).json({ error: "No file uploaded" });
// //   }

// //   const imagePath = path.join(__dirname, "uploads", req.file.filename);
// //   const modelPath = path.join(__dirname, "model", "model_blood_group_detection.h5");

// //   console.log("✅ Image received:", imagePath);

// //   const pythonProcess = spawn("python", ["./predict.py", imagePath, modelPath]);

// //   let resultData = "";
// //   let errorData = "";

// //   pythonProcess.stdout.on("data", (data) => {
// //     resultData += data.toString();
// //   });

// //   pythonProcess.stderr.on("data", (data) => {
// //     errorData += data.toString();
// //   });

// //   pythonProcess.on("close", (code) => {
// //     console.log("📢 Python Process Closed with Code:", code);
// //     console.log("📜 Raw Python Output:", resultData); // ✅ Add this to debug
// //     console.error("❌ Python Error Output:", errorData);

// //     if (errorData) {
// //       return res.status(500).json({ error: "Error in Python script", details: errorData });
// //     }

// //     try {
// //       const response = JSON.parse(resultData);
// //       console.log("✅ Final JSON Response:", response); // ✅ Add this to debug
// //       res.json(response);
// //     } catch (error) {
// //       console.error("❌ JSON Parsing Error:", error.message);
// //       res.status(500).json({ error: "Invalid response from Python script", details: resultData });
// //     }
// //   });
// // });

// app.post("/predict", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     console.error("❌ No file uploaded!");
//     return res.status(400).json({ error: "No file uploaded" });
//   }

//   const imagePath = path.join(__dirname, "uploads", req.file.filename);
//   const modelPath = path.join(__dirname, "model", "model_blood_group_detection.h5");

//   console.log("✅ Image received:", imagePath);
//   console.log("🚀 Starting Python script...");

//  const pythonProcess = spawn("python", ["./predict.py", imagePath, modelPath]);

// //   const modelPath = path.join(__dirname, "model", "model_blood_group_detection.h5");
// // console.log("🛠 Model Path:", modelPath); // Debugging Step

// // const pythonProcess = spawn("python", [path.join(__dirname, "predict.py"), imagePath, modelPath]);


//   let resultData = "";
//   let errorData = "";

//   pythonProcess.stdout.on("data", (data) => {
//     resultData += data.toString();
//     console.log("📜 Python Output (stdout):", data.toString()); // ✅ Log Python output
//   });

//   pythonProcess.stderr.on("data", (data) => {
//     errorData += data.toString();
//     console.error("❌ Python Error (stderr):", data.toString()); // ✅ Log Python errors
//   });

//   pythonProcess.on("close", (code) => {
//     console.log("📢 Python Process Closed with Code:", code);
//     if (errorData) {
//       return res.status(500).json({ error: "Error in Python script", details: errorData });
//     }

//     try {
//       const response = JSON.parse(resultData);
//       console.log("✅ Final JSON Response:", response);
//       res.json(response);
//     } catch (error) {
//       console.error("❌ JSON Parsing Error:", error.message);
//       res.status(500).json({ error: "Invalid response from Python script", details: resultData });
//     }
//   });
// });




// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const { spawn } = require("child_process");
const path = require("path");

const Form = require("./models/FormModel");

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const MONGO_URI = "mongodb+srv://janu:Jahnavi9908@projects.o3gjm.mongodb.net/db";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Multer setup for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure this directory exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// ✅ Signup Route
app.post("/submit", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newUser = new Form({ name, email, password });
    await newUser.save();

    res.json({ message: "User registered successfully!" });
  } catch (err) {
    console.error("Error in signup:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//1st
// ✅ Login Route
// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     console.log("Login Attempt:", { email, password });

//     const user = await Form.findOne({ email });

//     console.log("User Found in DB:", user);

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     if (user.password !== password) {
//       return res.status(401).json({ error: "Invalid password" });
//     }

//     res.json({ message: "Login successful!" });
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     console.log("Login Attempt:", { email, password });

//     const user = await Form.findOne({ email });

//     console.log("User Found in DB:", user);

//     if (!user) {
//       return res.status(404).json({ success: false, error: "User not found" });
//     }

//     if (user.password !== password) {
//       return res.status(401).json({ success: false, error: "Invalid password" });
//     }

//     res.json({ success: true, message: "Login successful!" }); // ✅ Added success: true
//   } catch (err) {
//     console.error("Login error:", err);
//     res.status(500).json({ success: false, error: "Internal Server Error" });
//   }
// });


app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Login Attempt:", { email, password });

    const user = await Form.findOne({ email });

    console.log("User Found in DB:", user);

    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ success: false, error: "Invalid password" });
    }

    // ✅ FIX: Add success: true in the response
    res.json({ success: true, message: "Login successful!" }); 
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});



// ✅ Prediction Route
// app.post("/predict", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     console.error("❌ No file uploaded!");
//     return res.status(400).json({ error: "No file uploaded" });
//   }

//   const imagePath = path.join(__dirname, "uploads", req.file.filename);
//   const modelPath = path.join(__dirname, "model", "model_blood_group_detection.h5");

//   console.log("✅ Image received:", imagePath);
//   console.log("🛠 Model Path:", modelPath);
//   console.log("🚀 Starting Python script...");

//   // ✅ Ensure Python script runs correctly
//   const pythonProcess = spawn("python", [path.join(__dirname, "predict.py"), imagePath, modelPath]);

//   let resultData = "";
//   let errorData = "";

//   pythonProcess.stdout.on("data", (data) => {
//     resultData += data.toString();
//     console.log("📜 Python Output (stdout):", data.toString()); // ✅ Debug Python output
//   });

//   pythonProcess.stderr.on("data", (data) => {
//     errorData += data.toString();
//     console.error("❌ Python Error (stderr):", data.toString());
//   });

//   pythonProcess.on("close", (code) => {
//     console.log("📢 Python Process Closed with Code:", code);

//     if (errorData) {
//       return res.status(500).json({ error: "Error in Python script", details: errorData });
//     }

//     try {
//       const cleanedResult = resultData.trim(); // 🔥 Ensure no extra logs before parsing
//       console.log("🚀 Cleaned Python Output:", cleanedResult);

//       const response = JSON.parse(cleanedResult);
//       console.log("✅ Final JSON Response:", response);

//       res.json(response);
//     } catch (error) {
//       console.error("❌ JSON Parsing Error:", error.message);
//       res.status(500).json({ error: "Invalid response from Python script", details: resultData });
//     }
//   });
// });

// app.post("/predict", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     console.error("❌ No file uploaded!");
//     return res.status(400).json({ error: "No file uploaded" });
//   }

//   const imagePath = path.join(__dirname, "uploads", req.file.filename);
//   const modelPath = path.join(__dirname, "model", "model_blood_group_detection.h5");

//   console.log("✅ Image received:", imagePath);
//   console.log("🚀 Starting Python script...");

//   const pythonProcess = spawn("python", ["./predict.py", imagePath, modelPath]);

//   let resultData = "";
//   let errorData = "";

//   pythonProcess.stdout.on("data", (data) => {
//     resultData += data.toString().trim();
//     console.log("📜 Python Output (stdout):", resultData);
//   });

//   pythonProcess.stderr.on("data", (data) => {
//     const warningMessages = [
//       "oneDNN custom operations are on",
//       "This TensorFlow binary is optimized",
//       "Compiled the loaded model",
//     ];

//     const message = data.toString().trim();
//     if (!warningMessages.some((warn) => message.includes(warn))) {
//       errorData += message;
//       console.error("❌ Python Error (stderr):", message);
//     }
//   });

//   pythonProcess.on("close", (code) => {
//     console.log("📢 Python Process Closed with Code:", code);

//     if (errorData) {
//       return res.status(500).json({ error: "Error in Python script", details: errorData });
//     }

//     try {
//       const response = JSON.parse(resultData);
//       console.log("✅ Final JSON Response:", response);
//       res.json(response);
//     } catch (error) {
//       console.error("❌ JSON Parsing Error:", error.message);
//       res.status(500).json({ error: "Invalid response from Python script", details: resultData });
//     }
//   });
// });

app.post("/predict", upload.single("image"), (req, res) => {
  if (!req.file) {
    console.error("❌ No file uploaded!");
    return res.status(400).json({ error: "No file uploaded" });
  }

  const imagePath = path.join(__dirname, "uploads", req.file.filename);
  const modelPath = path.join(__dirname, "model", "model_blood_group_detection.h5");

  console.log("✅ Image received:", imagePath);
  console.log("🚀 Starting Python script...");

  const pythonProcess = spawn("python", ["./predict.py", imagePath, modelPath]);

  let resultData = "";
  let errorData = "";

  pythonProcess.stdout.on("data", (data) => {
    const message = data.toString().trim();
    console.log("📜 Python Output (stdout):", message);

    // 🔹 Extract only valid JSON output by filtering out progress bars
    try {
      const jsonStartIndex = message.indexOf("{");
      if (jsonStartIndex !== -1) {
        resultData = message.slice(jsonStartIndex); // Keep only JSON part
      }
    } catch (error) {
      console.error("❌ JSON Extraction Error:", error.message);
    }
  });

  pythonProcess.stderr.on("data", (data) => {
    const warningMessages = [
      "oneDNN custom operations are on",
      "This TensorFlow binary is optimized",
      "Compiled the loaded model",
    ];

    const message = data.toString().trim();
    if (!warningMessages.some((warn) => message.includes(warn))) {
      errorData += message;
      console.error("❌ Python Error (stderr):", message);
    }
  });

  pythonProcess.on("close", (code) => {
    console.log("📢 Python Process Closed with Code:", code);

    if (errorData) {
      return res.status(500).json({ error: "Error in Python script", details: errorData });
    }

    try {
      const response = JSON.parse(resultData);
      console.log("✅ Final JSON Response:", response);
      res.json(response);
    } catch (error) {
      console.error("❌ JSON Parsing Error:", error.message);
      res.status(500).json({ error: "Invalid response from Python script", details: resultData });
    }
  });
});



// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
