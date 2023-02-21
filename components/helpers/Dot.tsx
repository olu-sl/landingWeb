import React from "react";

const Dot = ({ className }: { className?: string }) => {
  return <div className={`Dot ${className || ``}`}></div>;
};

export default Dot;
