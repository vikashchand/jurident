import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function MyFooter() {
  return (
    <div className="d-flex justify-content-between p-4 mx-4">
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
