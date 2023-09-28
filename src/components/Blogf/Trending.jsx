import React from "react";
import { TrendingData } from "../Blogf/dummyData";
import TrendingItem from "../Blogf/TrendingItem";
import { Helmet } from "react-helmet-async";
const Trending = () => {
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
      <div className="trending-grid mx-2 px-4">
        {TrendingData.map((trending) => (
          <TrendingItem key={trending.id} trending={trending} />
        ))}
      </div>
      <hr style={line_style} />
    </div>
  );
};

const line_style = {
  height: "5px",
  borderWidth: "0",
  color: "gray",
  marginLeft: "3%",
  backgroundColor: "gray",
  width: "94%",
};

export default Trending;
