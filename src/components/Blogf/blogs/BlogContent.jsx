import React from "react";
import { useParams } from "react-router-dom";
import { Content } from "../dummyData";
import { Helmet } from "react-helmet-async";
const BlogContent = () => {
  const { topic } = useParams();
  return (
    <>
    <Helmet>
        <title>JURIDENT</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
         
        />
        <link rel="canonical" href="/contact" />

        <meta  
        name ="keywords"
        content="To be added....."
        
        />
      </Helmet>
      <div className="p-4 mx-3 blog-content-main">
        {Content.filter((item) => item.topic === topic).map(
          (item) => item.mainText
        )}
      </div>
    </>
  );
};

export default BlogContent;
