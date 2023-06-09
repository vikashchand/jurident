import React from "react";
import { useParams } from "react-router-dom";
import { Content } from "../dummyData";

const BlogContent = () => {
  const { topic } = useParams();
  return (
    <div className="p-4 mx-3 blog-content-main">
      {Content.filter((item) => item.topic === topic).map(
        (item) => item.mainText
      )}
    </div>
  );
};

export default BlogContent;
