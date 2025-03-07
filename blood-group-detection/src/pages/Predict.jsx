import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "../styles/predict.css";

const Predict = () => {
  return (
    <div className="predict-page">
      {/* Sliding effect from bottom */}
      <motion.div 
        className="predict-container"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="predict-title"
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Blood Group Prediction
        </motion.h1>

        <motion.form 
          className="predict-form"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your name" />

          <label htmlFor="age">Age</label>
          <input type="number" id="age" placeholder="Enter your age" />

          <label htmlFor="gender">Gender</label>
          <select id="gender">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="blood-test">Upload Blood Sample Image</label>
          <input type="file" id="blood-test" accept="image/*" />

          <motion.button 
            type="submit"
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
          >
            Predict
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Predict;
