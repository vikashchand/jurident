import React, { Fragment } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import BlogContent from "./BlogContent";
import BlogIntro from "./BlogIntro";

const Blog = () => {
  return (
    <div>
      <Fragment>
        <Navbar />
        <BlogIntro />
        <BlogContent />
        <Footer />
      </Fragment>
    </div>
  );
};

export default Blog;
