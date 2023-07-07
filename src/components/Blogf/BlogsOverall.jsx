import React from "react";
import { BlogData } from "./dummyData";
import BlogItem from "./BlogItem";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const Blogs = () => {
  return (
    <div className="blog-overall mx-2 px-4 mt-5">
      <div className="d-flex flex-column">
        {BlogData.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="d-flex flex-column blog-side-section">
        <div className="mb-5">
          <p className="bold-content">Discover more</p>
          <div className="row">
            <button className="btn border border-dark rounded-pill mx-2 my-2">
              Crime
            </button>
            <button className="btn border border-dark rounded-pill mx-2 px-5 my-2">
              Constitution
            </button>
            <button className="btn border border-dark rounded-pill mx-2 my-2">
              Legal
            </button>
            <button className="btn border border-dark rounded-pill px-3 mx-2 my-2">
              Lorem
            </button>
            <button className="btn border border-dark rounded-pill mx-2 my-2">
              Murder
            </button>
            <button className="btn border border-dark rounded-pill mx-2 my-2">
              Trial
            </button>
          </div>
        </div>
        <div className="blog-img-end text-center p-5 mb-5"></div>
        <div>
          <p className="bold-content">{BlogData[1].content}</p>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div className="lighter-text-content">{BlogData[1].timing}</div>
              <span className="px-2"></span>
              <p className="bold-content text-dark">{BlogData[1].date}</p>
            </div>
            <a href="!#">
              <MdOutlineBookmarkAdd />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
