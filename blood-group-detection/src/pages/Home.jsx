// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import "../styles/Home.css";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

// const teamMembers = [
//   { name: "T. JAHNAVI", image: "", description: "AI Engineer & Lead Developer" },
//   { name: "B. SWETHA SUSAN", image: "/assets/s.jpeg", description: "Data Scientist & Researcher" },
//   { name: "K. DIVYASRI", image: "https://drive.google.com/uc?export=view&id=1MJLabYlgkngO0ODo1BBzyEqcz9w4Wcwa", description: "Backend Developer & Security Expert" },
//   { name: "G. HARSHITHA", image: "https://randomuser.me/api/portraits/women/4.jpg", description: "UI/UX Designer & Frontend Developer" },
//   { name: "K. MARTINA", image: "https://randomuser.me/api/portraits/men/5.jpg", description: "Project Manager & Marketing Head" }
// ];

// const Home = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="home-container">
//         <h1>Welcome to Our Blood Group Detection Platform</h1>
//         <p>Detect blood groups easily using fingerprints with AI-driven technology.</p>

//         {/* Team Members Section */}
//         <div className="team-section">
//           <h2>Meet Our Team</h2>
//           <div className="team-grid">
//             {teamMembers.map((member, index) => (
//               <div key={index} className="team-member">
//                 <div className="team-image-container">
//                   <img src={member.image} alt={`Photo of ${member.name}`} loading="lazy" />
//                 </div>
//                 <div className="team-info">
//                   <h4>{member.name}</h4>
//                   <p>{member.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

        // {/* Contact Section */}
        // <div className="contact-section">
        //   <h2>Contact Us</h2>
        //   <p>
        //     <FaPhone /> +91 98765 43210
        //   </p>
        //   <p>
        //     <FaEnvelope /> contact@bloodgroupdetect.com
        //   </p>
        //   <div className="social-links">
        //     <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        //     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        //     <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        //     <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        //    </div>
        //  </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";

import jahnaviImg from "../assets/team/j.jpg";
import swethaImg from "../assets/team/s.jpg";
import divyasriImg from "../assets/team/d.jpg";
import harshithaImg from "../assets/team/h.jpg";
import martinaImg from "../assets/team/m.jpg";

const teamMembers = [
  { name: "T. JAHNAVI", image: jahnaviImg , description: "AI Engineer & Lead Developer" },
  { name: "B. SWETHA SUSAN", image:swethaImg , description: "Data Scientist & Researcher" },
  { name: "K. DIVYASRI", image:divyasriImg , description: "Backend Developer & Security Expert" },
  { name: "G. HARSHITHA", image:harshithaImg , description: "UI/UX Designer & Frontend Developer" },
  { name: "K. MARTINA", image: martinaImg, description: "Project Manager & Marketing Head" },
];

const Home = () => {
  const [query, setQuery] = useState("");
  
  const handleQuerySubmit = (e) => {
    e.preventDefault();
    alert(`Your query has been submitted: ${query}`);
    setQuery("");
  };

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="home">
        <div className="overlay">
          <h1>Welcome to Blood Group Detection</h1>
          <p>Fast and accurate blood group detection using AI.</p>
          <Link to="/predict" className="btn">Predict Now</Link>
        </div>
      </section>

      {/* About Us & Team Section */}
      <section id="about" className="about-container">
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
      </section>

      {/* Contact Section */}
      <div id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p><FaPhone /> +91 98765 43210</p>
        <p><FaEnvelope /> contact@bloodgroupdetect.com</p>
        

      {/* Query Submission Box */}
      <div className="query-section">
        <h2>Write a Query</h2>
        <form onSubmit={handleQuerySubmit}>
          <textarea 
            placeholder="Type your query here..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default Home;


