import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function MyFooter() {
  return (
    <div className="d-flex justify-content-between p-4 mx-4">
      <div>
        <btn className="btn border border-dark rounded-pill mx-2 my-2">
          lorem
        </btn>
        <btn className="btn border border-dark rounded-pill mx-2 my-2">
          ipsum
        </btn>
        <btn className="btn border border-dark rounded-pill mx-2 my-2">
          justo
        </btn>
        <btn className="btn border border-dark rounded-pill mx-2 my-2">
          lorem
        </btn>
      </div>
      <div>
        <a href="" class="text-dark">
          <FaArrowLeft size="2rem"></FaArrowLeft>
        </a>
        <a href="" class="text-dark">
          <FaArrowRight size="2rem"></FaArrowRight>
        </a>
      </div>
    </div>
  );
}

export default MyFooter;
