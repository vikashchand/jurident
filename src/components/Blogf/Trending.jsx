import React from "react";

const Trending = () => {
  return (
    <div className="row mx-2 px-4">
      <div className="col-4 d-flex p-4">
        <div className="lighter-text-content" style={{ fontSize: "50px" }}>
        01
        </div>
        <div className="m-2">
          <p className="lighter-text-heading">George in Lorem Blog</p>
          <p className="bold-content-grid">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="d-flex justify-content-between lighter-text-content">
            <p>5 min read</p>
            <p className="bold-content text-dark">May 23</p>
          </div>
        </div>
      </div>
      <div className="col-4 d-flex p-4">
        <div className="lighter-text-content" style={{ fontSize: "50px" }}>
          02
        </div>
        <div className="m-2">
          <p className="lighter-text-heading">George in Lorem Blog</p>
          <p className="bold-content-grid">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="d-flex justify-content-between lighter-text-content">
            <p>5 min read</p>
            <p className="bold-content text-dark">May 23</p>
          </div>
        </div>
      </div>
      <div className="col-4 d-flex p-4">
        <div className="lighter-text-content" style={{ fontSize: "50px" }}>
          03
        </div>
        <div className="m-2">
          <p className="lighter-text-heading">George in Lorem Blog</p>
          <p className="bold-content-grid">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="d-flex justify-content-between lighter-text-content">
            <p>5 min read</p>
            <p className="bold-content text-dark">May 23</p>
          </div>
        </div>
      </div>
      <div className="col-4 d-flex p-4">
        <div className="lighter-text-content" style={{ fontSize: "50px" }}>
          04
        </div>
        <div className="m-2">
          <p className="lighter-text-heading">George in Lorem Blog</p>
          <p className="bold-content-grid">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="d-flex justify-content-between lighter-text-content">
            <p>5 min read</p>
            <p className="bold-content text-dark">May 23</p>
          </div>
        </div>
      </div>
      <div className="col-4 d-flex p-4">
        <div className="lighter-text-content" style={{ fontSize: "50px" }}>
          05
        </div>
        <div className="m-2">
          <p className="lighter-text-heading">George in Lorem Blog</p>
          <p className="bold-content-grid">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="d-flex justify-content-between lighter-text-content">
            <p>5 min read</p>
            <p className="bold-content text-dark">May 23</p>
          </div>
        </div>
      </div>
      <div className="col-4 d-flex p-4">
        <div className="lighter-text-content" style={{ fontSize: "50px" }}>
          06
        </div>
        <div className="m-2">
          <p className="lighter-text-heading">George in Lorem Blog</p>
          <p className="bold-content-grid">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="d-flex justify-content-between lighter-text-content">
            <p>5 min read</p>
            <p className="bold-content text-dark">May 23</p>
          </div>
        </div>
      </div>
      <hr style={line_style} />
    </div>
  );
};

const line_style = {
  height: "5px",
  borderWidth: "0",
  color: "gray",
  backgroundColor: "gray",
  width: "100%",
};

export default Trending;
