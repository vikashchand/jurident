import React from "react";
import { TrendingData } from "../dummyData";
import TrendingItem from "./TrendingItem";

const Trending = () => {
  return (
    <div>
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
