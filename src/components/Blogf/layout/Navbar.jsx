import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Navbar = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />

        <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />

        <meta  
        name ="keywords"
        content="Find lawyers for my case"
        
        /><meta  
        name ="keywords"
        content="Family lawyer consultation"
        
        /><meta  
        name ="keywords"
        content="Personal injury lawyer consultation"
        
        /><meta  
        name ="keywords"
        content="Employment law lawyer"
        
        /><meta  
        name ="keywords"
        content="File my case"
        
        /><meta  
        name ="keywords"
        content="How to file a case"
        
        /><meta  
        name ="keywords"
        content="Law consultation"
        
        /><meta  
        name ="keywords"
        content="Legal services online"
        
        /><meta  
        name ="keywords"
        content=""
        
        />
        
        <meta  
        name ="keywords"
        content="Intellectual property lawyer consultation"
        
        />
        
        <meta  
        name ="keywords"
        content="Legal services online"
        
        />
<meta  
        name ="keywords"
        content="Experienced lawyers online"
        
        />
<meta  
        name ="keywords"
        content="Civil case consultation "
        
        />
<meta  
        name ="keywords"
        content="Legal procedure consultation"
        
        />
<meta  
        name ="keywords"
        content="Business lawyer consultation"
        
        />
<meta  
        name ="keywords"
        content="Lawyer near me"
        
        />

<meta  
        name ="keywords"
        content="Family lawyers near me"
        
        />
        <meta  
        name ="keywords"
        content="Law consultations near me"
        
        />
        <meta  
        name ="keywords"
        content="Affordable Law consultation"
        
        />
        <meta  
        name ="keywords"
        content="Legal professionals community online"
        
        />
        <meta  
        name ="keywords"
        content="Websites for lawyers"
        
        />
        <meta  
        name ="keywords"
        content="Online Community for lawyers"
        
        />
        <meta  
        name ="keywords"
        content="EXECELLENCE"
        
        />
        
         <meta  
        name ="keywords"
        content="EXPERIENCE"
        
        /> 
        
        
        <meta  
        name ="keywords"
        content="INTEGRITY"
        
        />

        <meta
        name="keywords"
        content="Juriedent"
        
        />

      </Helmet>


      </Helmet>
      <div className="d-flex justify-content-between p-4 mx-3">
        <div class="bold-content">Monday, 15 May 2023</div>
        <div class="bold-content">Chennai, India</div>
      </div>
      <hr style={line_style} />
      <div className="heading py-5 d-flex justify-content-center">
        <div className="text-center d-flex flex-column">
          <Link to="/Blogs">
            <h1 className="bold-content">JURIDENT</h1>
          </Link>
          <h6 className="align-self-end">The Blog</h6>
        </div>
      </div>
      <hr style={line_style} />
      <nav className="mx-auto pb-4">
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
      <hr style={line_style} />
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
