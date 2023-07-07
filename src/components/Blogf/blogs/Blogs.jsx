import React from "react";
import { BlogData } from "../dummyData";
import BlogItem from "./BlogItem";

import { MdOutlineBookmarkAdd } from "react-icons/md";
import { BsImage } from "react-icons/bs";

const Blogs = () => {
  return (
    <div className="d-flex mx-2 px-4 mt-5">
      <div className="d-flex flex-column">
        {BlogData.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="d-flex flex-column blog-side-section">
        <div className="mb-5">
          <p className="bold-content">Discover more</p>
          <btn className="btn border border-dark rounded-pill mx-2 my-2">
            Crime
          </btn>
          <btn className="btn border border-dark rounded-pill mx-2 my-2">
            Constitution
          </btn>
          <btn className="btn border border-dark rounded-pill mx-2 my-2">
            Legal
          </btn>
          <btn className="btn border border-dark rounded-pill mx-2 my-2">
            Murder
          </btn>
          <btn className="btn border border-dark rounded-pill mx-2 my-2">
            Trial
          </btn>
          <btn className="btn border border-dark rounded-pill mx-2 my-2">
            Lorem Ipsum
          </btn>
          <btn className="btn border border-dark rounded-pill mx-2 my-2">
            Lorem Ipsum
          </btn>
        </div>
        <div className="blog-img-end text-center pt-5 mb-5">
          <BsImage />
        </div>
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
