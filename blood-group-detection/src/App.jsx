// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Predict from "./pages/Predict";

// function App() {
//   return (
//     <>
//       {/* ✅ This should be outside <Routes> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/predict" element={<Predict />} />
//       </Routes>
//     </>
//   );
// }
// export default App;


// current working code
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Predict from "./pages/Predict";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/predict" element={<Predict />} />
//     </Routes>
//   );
// }

// export default App;  // ✅ Ensure App is exported

//past code
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// import { useEffect } from "react";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Predict from "./pages/Predict";


// function ScrollToHashElement() {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const id = location.hash.replace("#", "");
//       const element = document.querySelector(`[name="${id}"]`);
//       if (element) {
//         setTimeout(() => {
//           element.scrollIntoView({ behavior: "smooth", block: "start" });
//         }, 0);
//       }
//     }
//   }, [location]);

//   return null;
// }

// function App() {
//   return (
//     <>
//       <ScrollToHashElement />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/predict" element={<Predict />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Predict from "./pages/Predict";
import Navbar from "./components/Navbar"; // Assuming you have a Navbar component
import { ParallaxProvider } from 'react-scroll-parallax';


function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.querySelector(`[name="${id}"]`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    }
  }, [location]);

  return null;
}

function App() {
  console.log("App Component is Rendering");
  return (
    <>
    <ParallaxProvider>
        

      <ScrollToHashElement />
      <Navbar /> {/* Add Navbar here to make it visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/predict" element={<Predict />} />
      </Routes>
      </ParallaxProvider>
      </>
  );
}

export default App;
