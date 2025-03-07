// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/Login.css";

// const Login = () => {
//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <h2>Login to Your Account</h2>
//         <form>
//           <div className="input-group">
//             <label>Email</label>
//             <input type="email" placeholder="Enter your email" required />
//           </div>
//           <div className="input-group">
//             <label>Password</label>
//             <input type="password" placeholder="Enter your password" required />
//           </div>
//           <button type="submit" className="btn">Login</button>
//         </form>
//         <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { pageVariant, formVariant, titleVariant, buttonVariant } from "../utils/motionVariants";
// import "../styles/Login.css";

// const Login = () => {
//   return (
//     <motion.div className="login-page" initial="hidden" animate="visible" variants={pageVariant}>
//       <motion.div className="login-container" variants={formVariant}>
//         <motion.h2 variants={titleVariant}>Login to Your Account</motion.h2>

//         <motion.form variants={formVariant}>
//           <motion.div className="input-group" variants={formVariant}>
//             <label>Email</label>
//             <input type="email" placeholder="Enter your email" required />
//           </motion.div>

//           <motion.div className="input-group" variants={formVariant}>
//             <label>Password</label>
//             <input type="password" placeholder="Enter your password" required />
//           </motion.div>

//           <motion.button type="submit" className="btn" {...buttonVariant}>Login</motion.button>
//         </motion.form>

//         <motion.p variants={titleVariant}>
//           Don't have an account? <Link to="/signup">Sign up</Link>
//         </motion.p>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css"; // Ensure styles are linked

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", formData);
      alert(res.data.message);
      setFormData({ email: "", password: "" }); // Clear form after submission
    } catch (err) {
      alert("Error logging in");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
