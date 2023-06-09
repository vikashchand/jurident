import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TrendingItem = ({ trending }) => {
  return (
    <div>
      <div className="d-flex p-4">
        <div className="lighter-text-content" style={{ fontSize: "50px" }}>
          {trending.id}
        </div>
        <div className="m-2">
          <p className="lighter-text-heading">{trending.heading}</p>
          <Link to={`/${trending.topic}`} className="bold-content-grid">
            {trending.content}
          </Link>
          <div className="d-flex justify-content-between lighter-text-content">
            <p>{trending.timing}</p>
            <p className="bold-content text-dark">{trending.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

TrendingItem.propTypes = {
  trending: PropTypes.object.isRequired,
};

export default TrendingItem;
