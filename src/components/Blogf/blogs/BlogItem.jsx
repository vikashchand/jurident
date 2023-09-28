import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { BsImage } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
const BlogItem = ({ blog }) => {
  return (
    <div>
      {/* import { Helmet } from "react-helmet-async"; */}
    <Helmet>
        <title>JURIDENT</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
         
        />
        <link rel="canonical" href="/contact" />

        <meta  
        name ="keywords"
        content="To be added....."
        
        />
      </Helmet>
      <div className="d-flex mb-3">
        <div className="d-flex flex-column blog-overview">
          <div className="bold-content d-flex">
            <BiUserCircle />
            <div className="mx-3">{blog.author}</div>
          </div>
          <Link to={`/${blog.topic}`} className="blog-heading">
            {blog.heading}
          </Link>
          <Link to={`/${blog.topic}`} className="blog-content">
            {blog.content}
          </Link>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <p className="lighter-text-content">{blog.timing}</p>
              <span className="px-2"></span>
              <p className="bold-content text-dark">{blog.date}</p>
            </div>
            <a href="!#">
              <MdOutlineBookmarkAdd />
            </a>
          </div>
        </div>
        <div className="blog-img text-center pt-5 mb-5">
          <BsImage />
        </div>
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogItem;
