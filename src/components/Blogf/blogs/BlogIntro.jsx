import React from "react";

import { useParams } from "react-router-dom";
import { Content } from "../dummyData";
import { FaUser } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

const BlogIntro = () => {
  const { topic } = useParams();

  return (
    <div>
      <div className="blog-img-main mt-5"></div>
      <div className="blog-heading p-4 mx-3">
        {Content.filter((item) => item.topic === topic).map(
          (item) => item.heading
        )}
      </div>

      <div className="p-3 mx-4">
        <nav className="d-flex">
          <FaUser size="2rem" />
          <span className="mx-2"></span>
          <p className="bold-content">
            By{" "}
            {Content.filter((item) => item.topic === topic).map(
              (item) => item.author
            )}
          </p>
          <span className="mx-2"></span>
          <p className="lighter-text-content">
            {Content.filter((item) => item.topic === topic).map(
              (item) => item.timing
            )}
          </p>
          <span className="mx-2"></span>
          <a href="!#" className="bold-content">
            Follow
          </a>
        </nav>
      </div>
      <hr style={line_style} />
      <nav className="p-4 mx-4 d-flex justify-content-between">
        <div>
          <a href="#">
            <FaThumbsUp size="1.5rem" class="p-0" />
          </a>{" "}
          <span className="lighter-text-content">
            {Content.filter((item) => item.topic === topic).map(
              (item) => item.likes
            )}
          </span>
          <a href="">
            <FaComment size="1.5rem" style={{ marginLeft: "40px" }} />
          </a>{" "}
          <span className="lighter-text-content">
            {Content.filter((item) => item.topic === topic).map(
              (item) => item.comments
            )}
          </span>
        </div>
        <div>
          <a href="">
            <FaBookmark size="1.5rem" style={{ marginLeft: "480px" }} />
          </a>
          <a href="">
            <FaShare size="1.5rem" style={{ marginLeft: "30px" }} />
          </a>
        </div>
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

export default BlogIntro;
