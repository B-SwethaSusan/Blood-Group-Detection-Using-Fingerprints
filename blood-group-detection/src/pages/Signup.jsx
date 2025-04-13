// import React, { useState } from "react";
// import { pageVariant, formVariant, titleVariant, buttonVariant } from "../utils/motionVariants";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import "../styles/Signup.css";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     let newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.includes("@")) newErrors.email = "Valid email is required";
//     if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
//     if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length === 0) {
//       setSubmitted(true);
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   return (
//     <div className="signup-page">
//       <div className="signup-container">
//         <h2>Create Your Account</h2>
//         {submitted ? (
//           <p className="success-password">Account created successfully! <Link to="/login">Login now</Link></p>
//         ) : (
//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <label>Name</label>
//               <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
//               {errors.name && <p className="error">{errors.name}</p>}
//             </div>

//             <div className="input-group">
//               <label>Email</label>
//               <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
//               {errors.email && <p className="error">{errors.email}</p>}
//             </div>

//             <div className="input-group">
//               <label>Password</label>
//               <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
//               {errors.password && <p className="error">{errors.password}</p>}
//             </div>

//             <div className="input-group">
//               <label>Confirm Password</label>
//               <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm password" />
//               {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
//             </div>

//             <button type="submit" className="btn">Sign Up</button>
//           </form>
//         )}
//         <p>Already have an account? <Link to="/login">Login here</Link></p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;





// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { pageVariant, formVariant, titleVariant, buttonVariant } from "../utils/motionVariants";
// import "../styles/Signup.css";

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     let newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.includes("@")) newErrors.email = "Valid email is required";
//     if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
//     if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length === 0) {
//       setSubmitted(true);
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   return (
//     <motion.div className="signup-page" initial="hidden" animate="visible" variants={pageVariant}>
//       <motion.div className="signup-container" variants={formVariant}>
//         <motion.h2 variants={titleVariant}>Create Your Account</motion.h2>

//         {submitted ? (
//           <motion.p className="success-password" initial="hidden" animate="visible" variants={titleVariant}>
//             Account created successfully! <Link to="/login">Login now</Link>
//           </motion.p>
//         ) : (
//           <motion.form onSubmit={handleSubmit} variants={formVariant}>
//             <motion.div className="input-group" variants={formVariant}>
//               <label>Name</label>
//               <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
//               {errors.name && <p className="error">{errors.name}</p>}
//             </motion.div>

//             <motion.div className="input-group" variants={formVariant}>
//               <label>Email</label>
//               <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
//               {errors.email && <p className="error">{errors.email}</p>}
//             </motion.div>

//             <motion.div className="input-group" variants={formVariant}>
//               <label>Password</label>
//               <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" />
//               {errors.password && <p className="error">{errors.password}</p>}
//             </motion.div>

//             <motion.div className="input-group" variants={formVariant}>
//               <label>Confirm Password</label>
//               <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm password" />
//               {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
//             </motion.div>

//             <motion.button type="submit" className="btn" {...buttonVariant}>Sign Up</motion.button>
//           </motion.form>
//         )}

//         <motion.p variants={titleVariant}>
//           Already have an account? <Link to="/login">Login here</Link>
//         </motion.p>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default SignUp;

//hii
// import React, { useState } from "react";
// import axios from "axios";

// const Signup = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/submit",formData);
//       alert(res.data.password);
//       setFormData({ name: "", email: "", password: "" }); // Clear form after submission
//     } catch (err) {
//       alert("Error submitting form");
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", textAlign: "center", border: "1px solid #ccc", borderRadius: "10px" }}>
//       <h2>Submit Form</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required style={styles.input} />
//         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={styles.input} />
//         <textarea name="password" placeholder="password" value={formData.password} onChange={handleChange} required style={styles.textarea} />
//         <button type="submit" style={styles.button}>Submit</button>
//       </form>
//     </div>
//   );
// };

// const styles = {
//   input: { width: "100%", padding: "10px", margin: "5px 0", borderRadius: "5px", border: "1px solid #ccc" },
//   textarea: { width: "100%", padding: "10px", margin: "5px 0", borderRadius: "5px", border: "1px solid #ccc", height: "80px" },
//   button: { width: "100%", padding: "10px", marginTop: "10px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }
// };

// export default Signup;
//hi

// import React, { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
//  import "../styles/Signup.css"; // Import Framer Motion

// const Signup = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/submit", formData);
//       alert(res.data.password);
//       setFormData({ name: "", email: "", password: "" }); // Clear form after submission
//     } catch (err) {
//       alert("Error submitting form");
//     }
//   };

//   return (
//     <div className="signup-page">
//       {/* Animated form container */}
//       <motion.div
//         className="signup-container"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <motion.h2
//           className="signup-title"
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           Signup Form
//         </motion.h2>

//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
//         >
//           <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="input" />
//           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="input" />
//           <textarea name="password" placeholder="password" value={formData.password} onChange={handleChange} required className="textarea" />

//           <motion.button
//             type="submit"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="submit-button"
//           >
//             Submit
//           </motion.button>
//         </motion.form>
//       </motion.div>
//     </div>
//   );
// };

// export default Signup;

// last modified one
// import React, { useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion"; // Import Framer Motion
// import "../styles/signup.css"; // Ensure your styles are linked

// const Signup = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8000/submit", formData);
//       alert(res.data.password);
//       setFormData({ name: "", email: "", password: "" }); // Clear form after submission
//     } catch (err) {
//       alert("Error submitting form");
//     }
//   };

//   return (
//     <div className="signup-page">
//       <motion.div
//         className="signup-container"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <h2>Signup Form</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//           <input type="text" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//           <motion.button
//             type="submit"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             Submit
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "../styles/signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(""); // ✅ Error state
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset errors before submitting

    try {
      const res = await axios.post("http://localhost:8000/submit", formData);
      alert("✅ Signup successful! Redirecting to login...");
      setFormData({ name: "", email: "", password: "" }); // Clear form
      navigate("/login"); // ✅ Redirect to Login Page
    } catch (err) {
      setError("❌ Error submitting form. Please try again.");
    }
  };

  return (
    <div className="signup-page">
      <motion.div
        className="signup-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2>Signup Form</h2>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* ✅ Show error message if any */}
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Signup
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
