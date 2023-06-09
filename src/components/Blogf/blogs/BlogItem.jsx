import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { BsImage } from "react-icons/bs";

const BlogItem = ({ blog }) => {
  return (
    <div>
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
