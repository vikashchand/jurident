import React from "react";

import Search from "../../components/Blogf/Search";
import Trending from "../../components/Blogf/Trending";
import BlogsOverall from "../../components/Blogf/BlogsOverall";
import "./Blogs.css";
import Navbar from "../../components/Blogf/layout/Navbar";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Trending />
      <BlogsOverall />
    </div>
  );
};

export default Blogs;
