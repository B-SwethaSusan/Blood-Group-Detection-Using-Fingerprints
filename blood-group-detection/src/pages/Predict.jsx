// import React from "react";
// import { motion } from "framer-motion"; // Import Framer Motion
// import "../styles/predict.css";

// const Predict = () => {
//   return (
//     <div className="predict-page">
//       {/* Sliding effect from bottom */}
//       <motion.div 
//         className="predict-container"
//         initial={{ opacity: 0, y: 50 }} 
//         animate={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         <motion.h1 
//           className="predict-title"
//           initial={{ opacity: 0, x: -100 }} 
//           animate={{ opacity: 1, x: 0 }} 
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           Blood Group Prediction
//         </motion.h1>

//         <motion.form 
//           className="predict-form"
//           initial={{ opacity: 0, scale: 0.8 }} 
//           animate={{ opacity: 1, scale: 1 }} 
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
//         >
//           <label htmlFor="name">Full Name</label>
//           <input type="text" id="name" placeholder="Enter your name" />

//           <label htmlFor="age">Age</label>
//           <input type="number" id="age" placeholder="Enter your age" />

//           <label htmlFor="gender">Gender</label>
//           <select id="gender">
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>

//           <label htmlFor="blood-test">Upload Blood Sample Image</label>
//           <input type="file" id="blood-test" accept="image/*" />

//           <motion.button 
//             type="submit"
//             whileHover={{ scale: 1.1 }} 
//             whileTap={{ scale: 0.9 }}
//           >
//             Predict
//           </motion.button>
//         </motion.form>
//       </motion.div>
//     </div>
//   );
// };

// export default Predict;


// import { useState } from "react";
// import axios from "axios";

// const Predict = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [prediction, setPrediction] = useState(null);
//   const [error, setError] = useState("");

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       setError("Please select an image first.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", selectedFile);

//     try {
//       const response = await axios.post("http://localhost:8000/predict", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setPrediction(response.data);
//       setError("");
//     } catch (err) {
//       console.error("Error:", err);
//       setError("Failed to predict blood group.");
//     }
//   };

//   return (
//     <div className="predict-container">
//       <h2>Upload Fingerprint for Blood Group Prediction</h2>
//       <input type="file" accept="image/*" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Predict</button>

//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {prediction && (
//         <div>
//           <h3>Prediction Result:</h3>
//           <p>Blood Group: {prediction.blood_group}</p>
//           <p>Confidence: {prediction.confidence.toFixed(2)}%</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Predict;














// import { useState } from "react";

// const Predict = () => {
//   const [file, setFile] = useState(null);
//   const [prediction, setPrediction] = useState("");

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     if (!file) {
//       alert("Please select an image.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", file);

//     try {
//       const response = await fetch("http://localhost:8000/predict", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setPrediction(`Predicted Blood Group: ${data.blood_group}`);
//       } else {
//         setPrediction(`Error: ${data.error}`);
//       }
//     } catch (error) {
//       setPrediction("Failed to connect to server.");
//     }
//   };

//   return (
//     <div>
//       <h2>Blood Group Prediction</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="file" accept="image/*" onChange={handleFileChange} />
//         <button type="submit">Predict</button>
//       </form>
//       <p>{prediction}</p>
//     </div>
//   );
// };

// export default Predict;

















import { useState } from "react";
import { color, motion } from "framer-motion";

const Predict = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    setLoading(true);
    setPrediction(""); // Clear previous prediction

    try {
      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setPrediction(`Predicted Blood Group: ${data.blood_group}`);
      } else {
        setPrediction(`Error: ${data.error}`);
      }
    } catch (error) {
      setPrediction("Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  };

 

  return (
    <div style={styles.container}>
      <motion.div
        style={styles.card}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={styles.title}>Blood Group Prediction</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="file" accept="image/*" onChange={handleFileChange} style={styles.fileInput} />
          <motion.button
            type="submit"
            style={styles.submitButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={loading}
          >
            {loading ? "Predicting..." : "Predict"}
          </motion.button>
        </form>
        {loading && <div style={styles.loader}></div>}
        <p style={styles.result}>{prediction}</p>
      </motion.div>
    </div>
  );
};



// Internal CSS Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    // background: "#f4f4f4", // Light background instead of an image
    background: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..." ,
  },
  card: {
    textAlign: "center",
    width: "400px",
    // padding: "20px",
    // borderRadius: "10px",
    // background: "white",
    // boxShadow: "0 8px 32px rgba(57, 109, 168, 0.61)",
    // background:" rgba(49, 100, 177, 0.49)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    backdropFilter: "blur(10px)",
     backgroundColor: "rgba(255, 255, 255, 0.1)",
     borderRadius: "16px",
     padding: "2rem",
     boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "white",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  fileInput: {
    marginBottom: "15px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    color:"#ccc",
  },
  submitButton: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "white",
    background: "#2196F3",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  loader: {
    marginTop: "15px",
    width: "30px",
    height: "30px",
    border: "3px solid #ccc",
    borderTop: "3px solid #d9534f",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  result: {
    marginTop: "15px",
    fontSize: "18px",
    fontWeight: "bold",
  },
};




// Add keyframes for the loader animation
const styleTag = document.createElement("style");
styleTag.innerHTML = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleTag);

export default Predict;
