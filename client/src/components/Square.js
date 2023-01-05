import React from "react";

const Square = ({ color, children }) => (

    <div className={`bg-${color}-500 w-16 h-16`}>{children}</div>

);

export default Square