import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {BlogData} from '../../../src/components/Blogf/dummyData'
import Navbar from "../../../src/components/Blogf/layout/Navbar";
import Search from "../../../src/components/Blogf/others/Search";
import Trending from "../../../src/components/Blogf/others/Trending";
import Blogs from "../../../src/components/Blogf/blogs/Blogs";
import Blog from "../../../src/components/Blogf/blogs/Blog";

import "./Blogs.css";

function App() {
  const [blog, setBlog] = useState([]);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchBlogs = (name) => {
    BlogData.filter((item) => item.topic === name).map((item) => setBlog(item));
  };

  const clearBlogs = () => {
    setBlog([]);
    setLoading(false);
  };

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Fragment>
                <Navbar />
                <Search
                  searchBlogs={searchBlogs}
                  clearBlogs={clearBlogs}
                  showClear={blog.length > 0 ? true : false}
                  setAlert={showAlert}
                />
                <Trending />
                <Blogs />
              </Fragment>
            }
          />
          <Route exact path="/:topic" element={<Blog />} />
        </Routes>
      </div>
    
  );
}

export default App;
