import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="d-flex justify-content-between p-4 mx-3">
        <div class="bold-content">Monday, 15 May 2023</div>
        <div class="bold-content">Chennai, India</div>
      </div>
      <hr style={line_style} />
      <div className="heading py-2 d-flex justify-content-center">
        <div className="text-center d-flex flex-column">
          <Link to="/">
            <h1 className="bold-content">JURIDENT</h1>
          </Link>
          <h6 className="align-self-end">The Blog</h6>
        </div>
      </div>
      <nav className="border-5 border-top border-bottom mx-auto mt-2 py-2">
        <ul className="nav nav-fill">
          <li className="nav-item">
            <a className="nav-link bold-content text-dark" href="!#">
              My Feed
            </a>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link bold-content text-dark" href="!#">
              All Blogs
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link bold-content text-dark" href="!#">
              Top Blogs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link bold-content text-dark" href="!#">
              Trending
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link bold-content text-dark" href="!#">
              Bookmarks
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link bold-content text-dark" href="!#">
              Unread
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const line_style = {
  height: "5px",
  borderWidth: "0",
  color: "gray",
  backgroundColor: "gray",
  width: "95%",
  marginLeft: "2.5%",
};

export default Navbar;
