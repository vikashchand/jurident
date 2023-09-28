import React, { Fragment } from "react";

import Footer from "./Footer";
import BlogContent from "./BlogContent";
import BlogIntro from "./BlogIntro";
import Navbar from "./layout/Navbar";
import { Helmet } from "react-helmet-async";


const Blog = () => {
  return (
    <div>
      <Helmet>

        <title>Blog Page</title>
        <meta name="description" content="Jurident Blog Page" />
      </Helmet>

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
