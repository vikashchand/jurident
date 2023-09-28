import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function MyFooter() {
  return (
    <div className="d-flex justify-content-between p-4 mx-4">
      <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="d-flex">
        <button className="btn border border-dark rounded-pill mx-2 my-2">
          lorem
        </button>
        <button className="btn border border-dark rounded-pill mx-2 my-2">
          ipsum
        </button>
        <button className="btn border border-dark rounded-pill mx-2 my-2">
          justo
        </button>
        <button className="btn border border-dark rounded-pill mx-2 my-2">
          lorem
        </button>
      </div>
      <div className="d-flex">
        <a href="" class="text-dark">
          {/* <FaArrowLeft size="2rem"></FaArrowLeft> */}
        </a>
        <a href="" class="text-dark">
          {/* <FaArrowRight size="2rem"></FaArrowRight> */}
        </a>
      </div>
    </div>
  );
}

export default MyFooter;
