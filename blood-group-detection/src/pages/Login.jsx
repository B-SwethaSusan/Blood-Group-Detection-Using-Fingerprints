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
// lastcode
// import React, { useState } from "react";
// import axios from "axios";
// import "../styles/login.css"; // Ensure styles are linked

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8000/login", formData);
//       alert(res.data.message);
//       setFormData({ email: "", password: "" }); // Clear form after submission
//     } catch (err) {
//       alert("Error logging in");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";  // ✅ Import useNavigate
// import axios from "axios";
// import "../styles/login.css"; 

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();  // ✅ Initialize navigate

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8000/login", formData);
//       alert(res.data.message);

//       if (res.data.success) {  // ✅ Check success response
//         navigate("/predict");  // ✅ Redirect to Predict page
//       }
//     } catch (err) {
//       alert("Error logging in");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };


// export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
// import axios from "axios";
// import "../styles/login.css"; 

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate(); // ✅ Initialize navigate

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8000/login", formData);

//       console.log("Server Response:", res.data); // ✅ Log response from backend

//       alert(res.data.message);

//       if (res.data.success) {  
//         console.log("Redirecting to /predict"); // ✅ Log before navigating
//         navigate("/predict");  
//       } else {
//         console.error("Login failed:", res.data.error);
//       }
//     } catch (err) {
//       console.error("Login request error:", err);
//       alert("Error logging in");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

//swethas code
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../styles/Login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: Replace with actual login logic (e.g., API call)
//     alert(`Welcome back, ${email}!`);
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-glow"></div>
//       <div className="login-container">
//         <h2 className="login-title">🔬 Blood Group Detection</h2>
//         <p className="login-subtitle">Securely login to access smart AI blood group predictions.</p>

//         <form className="login-form" onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit" className="login-button">Login</button>
//         </form>

//         <p className="login-link">
//           Don't have an account? <Link to="/signup">Create one</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

//current working code
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import "../styles/Login.css";


// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:8000/login", formData);
//       alert(res.data.message);

//       if (res.data.success) {
//         navigate("/predict");
//       } else {
//         console.error("Login failed:", res.data.error);
//       }
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.message) {
//         alert(err.response.data.message);
//       } else {
//         alert("Error logging in. Please try again later.");
//       }
//       console.error("Login request error:", err);
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-glow"></div>
//       <div className="login-container">
//         <h2 className="login-title">🔬 Blood Group Detection</h2>
//         <p className="login-subtitle">Securely login to access smart AI blood group predictions.</p>

//         <form className="login-form" onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit" className="login-button">Login</button>
//         </form>

//         <p className="login-link">
//           Don't have an account? <Link to="/signup">Create one</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Moved inside the component

  // ✅ Get redirect path from URL or default to /predict
  const queryParams = new URLSearchParams(location.search);
  const redirectPath = queryParams.get("redirect") || "/predict";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", formData);
      alert(res.data.message);

      if (res.data.success) {
        navigate(redirectPath); // ✅ Redirects to /predict after login
      } else {
        console.error("Login failed:", res.data.error);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Error logging in. Please try again later.");
      }
      console.error("Login request error:", err);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-glow"></div>
      <div className="login-container">
        <h2 className="login-title">🔬 Blood Group Detection</h2>
        <p className="login-subtitle">Securely login to access smart AI blood group predictions.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="login-link">
          Don't have an account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
