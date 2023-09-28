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
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
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
