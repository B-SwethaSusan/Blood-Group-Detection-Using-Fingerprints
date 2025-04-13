// previous code
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import "../styles/Home.css";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

// import jahnaviImg from "../assets/team/j.jpg";
// import swethaImg from "../assets/team/s.jpg";
// import divyasriImg from "../assets/team/d.jpg";
// import harshithaImg from "../assets/team/h.jpg";
// import martinaImg from "../assets/team/m.jpg";

// const teamMembers = [
//   { name: "T. JAHNAVI", image: jahnaviImg , description: "AI Engineer & Lead Developer" },
//   { name: "B. SWETHA SUSAN", image:swethaImg , description: "Data Scientist & Researcher" },
//   { name: "K. DIVYASRI", image:divyasriImg , description: "Backend Developer & Security Expert" },
//   { name: "G. HARSHITHA", image:harshithaImg , description: "UI/UX Designer & Frontend Developer" },
//   { name: "K. MARTINA", image: martinaImg, description: "Project Manager & Marketing Head" },
// ];

// const Home = () => {
//   const [query, setQuery] = useState("");
  
//   const handleQuerySubmit = (e) => {
//     e.preventDefault();
//     alert(`Your query has been submitted: ${query}`);
//     setQuery("");
//   };
  

//   return (
//     <div>
//       <Navbar />
      
//       {/* Hero Section */}
//       <section id="home" className="home">
//         <div className="overlay">
//           <h1>Welcome to Blood Group Detection</h1>
//           <p>Fast and accurate blood group detection using AI.</p>
//           <Link to="/predict" className="btn">Predict Now</Link>
//         </div>
//       </section>

//       {/* About Us & Team Section */}
//       <section id="about" className="about-container">
//         <div className="team-section">
//         <h2 style={{ textAlign: "center", color: "blue" }}>About Us</h2>

//         <h2>Our Team</h2>
//           <div className="team-grid">
//             {teamMembers.map((member, index) => (
//               <div key={index} className="team-member">
//                 <img src={member.image} alt={member.name} loading="lazy" />
//                 <h4>{member.name}</h4>
//                 <p>{member.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="stats-section">
//           <div className="stat-box">
//             <h3>Reviews</h3>
//             <p>⭐ 4.8/5 (1,200+ Reviews)</p>
//           </div>
//           <div className="stat-box">
//             <h3>Users</h3>
//             <p>10,000+ Active Users</p>
//           </div>
//           <div className="stat-box">
//             <h3>Projects Completed</h3>
//             <p>500+ Successful Projects</p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <div id="contact" className="contact-section">
//         <h2>Contact Us</h2>
//         <p><FaPhone /> +91 98765 43210</p>
//         <p><FaEnvelope /> contact@bloodgroupdetect.com</p>
        

//       {/* Query Submission Box */}
//       <div className="query-section">
//         <h2>Write a Query</h2>
//         <form onSubmit={handleQuerySubmit}>
//           <textarea 
//             placeholder="Type your query here..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             required
//           ></textarea>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//       <div className="social-links">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


// after code 
// import React, { useState } from "react";
// import { Element } from "react-scroll";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import "../styles/Home.css";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

// import jahnaviImg from "../assets/team/j.jpg";
// import swethaImg from "../assets/team/s.jpg";
// import divyasriImg from "../assets/team/d.jpg";
// import harshithaImg from "../assets/team/h.jpg";
// import martinaImg from "../assets/team/m.jpg";

// const teamMembers = [
//   { name: "T. JAHNAVI", image: jahnaviImg , description: "AI Engineer & Lead Developer" },
//   { name: "B. SWETHA SUSAN", image:swethaImg , description: "Data Scientist & Researcher" },
//   { name: "K. DIVYASRI", image:divyasriImg , description: "Backend Developer & Security Expert" },
//   { name: "G. HARSHITHA", image:harshithaImg , description: "UI/UX Designer & Frontend Developer" },
//   { name: "K. MARTINA", image: martinaImg, description: "Project Manager & Marketing Head" },
// ];

// const Home = () => {
//   const [query, setQuery] = useState("");
  
//   const handleQuerySubmit = (e) => {
//     e.preventDefault();
//     alert(`Your query has been submitted: ${query}`);
//     setQuery("");
//   };
  

//   return (
//     <div>
//       <Navbar />
      
//       {/* Hero Section */}
//       <Element name="home" className="home">
//        <div className="overlay">
//         <h1>Welcome to Blood Group Detection</h1>
//          <p>Fast and accurate blood group detection using AI.</p>
//         <Link to="/predict" className="btn">Predict Now</Link>
//        </div>
//       </Element>

//       {/* About Us & Team Section */}
//       <Element name="about" className="about-container">
//         <div className="team-section">
//         <h2 style={{ textAlign: "center", color: "blue" }}>About Us</h2>

//         <h2>Our Team</h2>
//           <div className="team-grid">
//             {teamMembers.map((member, index) => (
//               <div key={index} className="team-member">
//                 <img src={member.image} alt={member.name} loading="lazy" />
//                 <h4>{member.name}</h4>
//                 <p>{member.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="stats-section">
//           <div className="stat-box">
//             <h3>Reviews</h3>
//             <p>⭐ 4.8/5 (1,200+ Reviews)</p>
//           </div>
//           <div className="stat-box">
//             <h3>Users</h3>
//             <p>10,000+ Active Users</p>
//           </div>
//           <div className="stat-box">
//             <h3>Projects Completed</h3>
//             <p>500+ Successful Projects</p>
//           </div>
//         </div>
//       </Element>


//       {/* Contact Section */}
//       {/* <div id="contact" className="contact-section">
//         <h2>Contact Us</h2>
//         <p><FaPhone /> +91 98765 43210</p>
//         <p><FaEnvelope /> contact@bloodgroupdetect.com</p> */}
        

//       {/* Query Submission Box */}
//       <Element name="contact" className="contact-section">
//       <h2>Contact Us</h2>
//         <p><FaPhone /> +91 98765 43210</p>
//         <p><FaEnvelope /> contact@bloodgroupdetect.com</p>
//         <h2>Write a Query</h2>
//         <form onSubmit={handleQuerySubmit}>
//           <textarea 
//             placeholder="Type your query here..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             required
//           ></textarea>
//           <button type="submit">Submit</button>
//         </form>
//       </Element>
//       <div className="social-links">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//         </div>
//       {/* </div> */}
//     </div>
//   );
// };

// export default Home;



import React, { useState } from "react";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Parallax } from 'react-scroll-parallax';

import jahnaviImg from "../assets/team/j.jpg";
import swethaImg from "../assets/team/s.jpg";
import divyasriImg from "../assets/team/d.jpg";
import harshithaImg from "../assets/team/h.jpg";
import martinaImg from "../assets/team/m.jpg";

const teamMembers = [
  { name: "T. JAHNAVI", image: jahnaviImg, description: "AI Engineer & Lead Developer" },
  { name: "B. SWETHA SUSAN", image: swethaImg, description: "Data Scientist & Researcher" },
  { name: "K. DIVYASRI", image: divyasriImg, description: "Backend Developer & Security Expert" },
  { name: "G. HARSHITHA", image: harshithaImg, description: "UI/UX Designer & Frontend Developer" },
  { name: "K. MARTINA", image: martinaImg, description: "Project Manager & Marketing Head" },
];

const Home = () => {
  const [query, setQuery] = useState("");

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    alert(`Your query has been submitted: ${query}`);
    setQuery("");
  };
// chane
  const navigate = useNavigate();

const handlePredictClick = () => {
  navigate("/login?redirect=/predict");
};


  return (
    <div>
      {/* <Navbar /> */}

       {/* Hero Section */}
       <Element name="home" className="home">
        <div className="overlay">
          <h1>Welcome to Blood Group Detection</h1>
          <p >Fast and accurate blood group detection using AI.</p> 
          

           <Link to="/login?redirect=/predict" className="btn">Predict Now</Link>
        </div>
      </Element>

      
      {/* About Us & Team Section */}
      <Element name="about" className="about-container">
        <div className="team-section">
          <h2 style={{ textAlign: "center", color: "blue" }}>About Us</h2>

          <h2>Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.image} alt={member.name} loading="lazy" />
                <h4>{member.name}</h4>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
        </Element>

       

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-box">
            <h3>Reviews</h3>
            <p>⭐ 4.8/5 (1,200+ Reviews)</p>
          </div>
          <div className="stat-box">
            <h3>Users</h3>
            <p>10,000+ Active Users</p>
          </div>
          <div className="stat-box">
            <h3>Projects Completed</h3>
            <p>500+ Successful Projects</p>
          </div>
        </div>
       


         

        {/* Contact Section */}
        <Element name="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p><FaPhone /> +91 98765 43210</p>
        <p><FaEnvelope /> contact@bloodgroupdetect.com</p>
        </Element>
        {/* Query Submission Box */}
        <h2>Write a Query</h2>
        <form onSubmit={handleQuerySubmit} className="query-section">
          <textarea
            placeholder="Type your query here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
         
        

        {/* Social Links */}
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      
    </div>
  );
};

export default Home;




