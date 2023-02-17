import React from "react";

const Col = ({ className, children }) => {
  // SM:
  return <div className={`sm:px-[15px] ${className || ''}`}>{children}</div>;
};

export default Col;
