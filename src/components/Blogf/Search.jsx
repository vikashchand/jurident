import React, { useState } from "react";
import { IconContext } from "react-icons";
import { HiTrendingUp } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const Search = () => {
  return (
    <div className="mx-3 px-4 py-5 d-flex justify-content-between">
      <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="d-flex">
        <IconContext.Provider value={{ style: { fontSize: "35px" } }}>
          <HiTrendingUp />
        </IconContext.Provider>
        <span className="px-1"></span>
        <h6 className="bold-content"> Trending on Jurident</h6>
      </div>

      <form className="form-group Search">
        <input
          class="form-control"
          type="text"
          id="name"
          name="text"
          placeholder="Search"
        />

        <BsSearch style={{ position: "relative", bottom: "45%", left: "2%" }} />
        <RxCross2
          style={{ position: "relative", bottom: "65%", left: "90%" }}
        />
      </form>
    </div>
  );
};

export default Search;
