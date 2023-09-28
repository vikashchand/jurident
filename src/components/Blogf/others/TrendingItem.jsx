import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const TrendingItem = ({ trending }) => {
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
