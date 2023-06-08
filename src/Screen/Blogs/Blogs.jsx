import React from "react";
import BlogNavbar from "../../components/Blogf/BlogNavbar";
import Search from "../../components/Blogf/Search";
import Trending from "../../components/Blogf/Trending";
import BlogsOverall from "../../components/Blogf/BlogsOverall";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <BlogNavbar />
      <Search />
      <Trending />
      <BlogsOverall />
    </div>
  );
};

export default Blogs;
