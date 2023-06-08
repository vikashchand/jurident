import React, { Fragment } from "react";
import BlogNavbar from "./BlogNavbar";
import Footer from "./Footer";
import BlogContent from "./BlogContent";
import BlogIntro from "./BlogIntro";

const Blog = () => {
  return (
    <div>
      <Fragment>
        <BlogNavbar />
        <BlogIntro />
        <BlogContent />
        <Footer />
      </Fragment>
    </div>
  );
};

export default Blog;
