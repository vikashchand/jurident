import React, { useState } from "react";
import { IconContext } from "react-icons";
import { HiTrendingUp } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const Search = ({ searchBlogs, showClear, clearBlogs, setAlert }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchBlogs(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className="mx-3 px-4 py-5 d-flex justify-content-between">
      <div className="d-flex">
        <IconContext.Provider value={{ style: { fontSize: "35px" } }}>
          <HiTrendingUp />
        </IconContext.Provider>
        <span className="px-1"></span>
        <h6 className="bold-content"> Trending on Jurident</h6>
      </div>

      <form onSubmit={onSubmit} className="form-group Search">
        <input
          class="form-control"
          type="text"
          id="name"
          name="text"
          value={text}
          placeholder="Search"
          onChange={onChange}
        />
        <BsSearch style={{ position: "relative", bottom: "50%", left: "3%" }} />
        {showClear && (
          <a href="!#" onClick={clearBlogs}>
            <RxCross2
              style={{ position: "relative", bottom: "50%", left: "85%" }}
            />
          </a>
        )}
      </form>
    </div>
  );
};

export default Search;
