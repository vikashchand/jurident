import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import log from '../../assets/new jd 2.png'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { loginWithRedirect, logout, isAuthenticated,user } = useAuth0();
  


  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container ">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={log} className="navbar-icon" />
              JURIDENT
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "nav-links" + (isActive ? " activated" : "")
              }
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
          </li>
  
                  <li className="nav-item">
                <NavLink
                  to="/Services"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Services
                </NavLink>
              </li>

              
              <li className="nav-item">
                <NavLink
                  to="/Blogs"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Blogs
                </NavLink>
              </li>


              <li className="nav-item">
                <NavLink
                  to="/News"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  News
                </NavLink>
              </li>

              
              <li className="nav-item">
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  About us
                </NavLink>
              </li>

              <li className="nav-item">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Profile
              </NavLink>
            </li>
            
             
              
               {isAuthenticated ? (
                <li className="navbar-container">
                <NavLink
                  to="/profilee"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                 
                  <img className="image" src={user.picture} alt={user.name} /> 
                </NavLink>
                <li className="nav-item">
                <button className="btn" onClick={() => logout({ returnTo: window.location.origin })}>
                  Log Out
                </button>
                
                </li>
               
              </li>
          
              

              ) : (
                <button className="btn" onClick={loginWithRedirect}>
                  Login
                </button>
              )}
              

                
            </ul>
            
            
          </div>
         
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
