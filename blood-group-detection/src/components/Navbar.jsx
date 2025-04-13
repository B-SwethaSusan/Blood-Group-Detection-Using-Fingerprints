// before code
// import { Link as ScrollLink } from "react-scroll";
// import { NavLink, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const location = useLocation();

//     // Close mobile menu on navigation
//     useEffect(() => {
//         setMenuOpen(false);
//     }, [location]);

//     return (
//         <nav className="navbar">
//             <div className="logo">Blood Group Detection</div>

//             {/* Hamburger Menu for Mobile */}
//             <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//                 ☰
//             </div>

//             <ul className={menuOpen ? "nav-links open" : "nav-links"}>
//             <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
//             <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>

//                 <li>
//                     {location.pathname === "/" ? (
//                         <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
//                     ) : (
//                         <NavLink to="/#contact">Contact</NavLink>
//                     )}
//                 </li>
//                 <li><NavLink to="/predict">Predict</NavLink></li>
//                 <li><NavLink to="/signup">Sign Up</NavLink></li>
//                 <li><NavLink to="/login">Login</NavLink></li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

//after changing code to 
// import { Link as ScrollLink } from "react-scroll";
// import { NavLink, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import "./Navbar.css";


// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const location = useLocation();

//     useEffect(() => {
//         setMenuOpen(false);
//     }, [location]);

//     return (
//         <nav className="navbar">
//             <div className="logo">Blood Group Detection</div>

//             {/* Hamburger Menu */}
//             <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//                 ☰
//             </div>

//             <ul className={menuOpen ? "nav-links open" : "nav-links"}>
//                 <li>
//                     <ScrollLink
//                         to="home"
//                         smooth={true}
//                         duration={500}
//                         offset={-80}
//                         className="nav-link"
//                         activeClass="active"
//                     >
//                         Home
//                     </ScrollLink>
//                 </li>
//                 <li>
//                     <ScrollLink
//                         to="about"
//                         smooth={true}
//                         duration={500}
//                         offset={-80}
//                         className="nav-link"
//                         activeClass="active"
//                     >
//                         About
//                     </ScrollLink>
//                 </li>
//                 {/* <li>
//                     {location.pathname === "/" ? (
//                         <ScrollLink
//                             to="contact"
//                             smooth={true}
//                             duration={500}
//                             offset={-80}
//                             className="nav-link"
//                             activeClass="active"
//                         >
//                             Contact
//                         </ScrollLink>
//                     ) : (
//                         <NavLink to="/#contact" className="nav-link">Contact</NavLink>
//                     )}
//                 </li> */}
//                 {/* <li><NavLink to="/predict" className="nav-link">Predict</NavLink></li>  */}
//                 <li><NavLink to="/login?redirect=/predict" className="nav-link">Predict</NavLink></li> 

//                 <li><NavLink to="/signup" className="nav-link">Sign Up</NavLink></li>
//                 <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

//new
import { Link as ScrollLink } from "react-scroll";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <nav className="navbar">
            <div className="logo">Blood Group Detection</div>

            {/* Hamburger Menu */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            <ul className={menuOpen ? "nav-links open" : "nav-links"}>
                {/* <li>
                    <ScrollLink
                        to="home"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="nav-link"
                        activeClass="active"
                    >
                        Home
                    </ScrollLink>
                </li> */}

                <li>
                {location.pathname === "/" ? (
                    <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="nav-link"
                    activeClass="active"
                    >
                    Home
                    </ScrollLink>
                ) : (
                    <NavLink to="/" className="nav-link">Home</NavLink>
                )}
                </li>



                {/* <li>
                    <ScrollLink
                        to="about"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="nav-link"
                        activeClass="active"
                    >
                        About
                    </ScrollLink>
                </li> */}
                {/* <li>
                    <NavLink to="/predict" className="nav-link" activeClassName="active">
                        Predict
                    </NavLink>
                </li> */}
                <li>
                    <NavLink to="/signup" className="nav-link" activeClassName="active">
                        Sign Up
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className="nav-link" activeClassName="active">
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;




