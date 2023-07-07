import React, { Fragment } from "react";

import Footer from "./Footer";
import BlogContent from "./BlogContent";
import BlogIntro from "./BlogIntro";
import Navbar from "./layout/Navbar";

const Blog = () => {
  return (
    <div>
      <Fragment>
       <Navbar/>
        <BlogIntro />
        <BlogContent />
        <Footer />
      </Fragment>
    </div>
  );
};

export default Blog;
