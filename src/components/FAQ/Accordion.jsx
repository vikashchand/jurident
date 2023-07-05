import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-items">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className="icons">
          {isActive ? <HiChevronUp /> : <HiChevronDown />}
        </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
