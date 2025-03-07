const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://janu:Jahnavi9908@projects.o3gjm.mongodb.net/db"; // Replace with your actual MongoDB URI

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit if connection fails
  }
};

module.exports = connectDB; // ✅ Export the function, do not call it here

