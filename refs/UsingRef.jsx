import React, { useEffect, useRef } from "react";

const UsingRef = () => {
  const countRef = useRef(0);
  const spanRef = useRef(null);

  // console.log(countRef);

  const handleClick = () => {
    countRef.current++;
    spanRef.current.innerText = countRef.current;
  };
  useEffect(() => {
    console.log("useref component re-rendered");
  });
  return (
    <div>
      <button onClick={handleClick}>
        useRef <span ref={spanRef}>0</span>
      </button>
    </div>
  );
};

export default UsingRef;
