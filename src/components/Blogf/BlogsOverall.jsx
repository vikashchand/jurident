import React from "react";
import { BlogData } from "./dummyData";
import BlogItem from "./BlogItem";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const Blogs = () => {
  return (
    <div className="d-flex flex-column flex-md-row mx-2 px-4 mt-5 ">
      <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="d-flex flex-column w-1 md:w-2/3 ">
        {BlogData.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="ml-4 d-flex flex-column blog-side-section">
        <div className="mb-5">
          <p className="bold-content">Discover more</p>
          <div className="row">
            <div className=" col-auto mb-2">
              <button className="ml-3 mr-3 btn border border-dark rounded-pill btn-block">Crime</button>
            </div>
            <div className="col-auto mb-2">
              <button className="ml-3 mr-3 btn border border-dark rounded-pill btn-block">Constitution</button>
            </div>
            <div className="col-auto mb-2">
              <button className="ml-3 mr-3 btn border border-dark rounded-pill btn-block">Legal</button>
            </div>
            <div className="col-auto mb-2">
              <button className="ml-3 mr-3 btn border border-dark rounded-pill btn-block">Lorem</button>
            </div>
            <div className="col-auto mb-2">
              <button className="ml-3 mr-3 btn border border-dark rounded-pill btn-block">Murder</button>
            </div>
            <div className="col-auto mb-2">
              <button className="ml-3 mr-3 btn border border-dark rounded-pill btn-block">Trial</button>
            </div>
            
          </div>
        </div>
        <div className="container2">
          <div className="blog-img-end text-center p-5 mb-5"></div>
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
    </div>
  );
};

export default Blogs;
