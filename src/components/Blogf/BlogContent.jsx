import React from "react";
import { useParams } from "react-router-dom";
import { Content } from "../Blogf/dummyData";

const BlogContent = () => {
  const { topic } = useParams();
  return (
    <div className="p-4 mx-3 blog-content-main">
      <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      {Content.filter((item) => item.topic === topic).map(
        (item) => item.mainText
      )}
    </div>
  );
};

export default BlogContent;
