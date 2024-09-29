import React, { useEffect, useState } from "react";

const UsingState = () => {
  const [number, setNumber] = useState(0);

  function handleClick() {
    setNumber((prev) => prev + 1);
  }

  useEffect(() => {
    console.log("usestate Component re-rendered");
  });
  return (
    <div>
      <button onClick={handleClick}>
        usestate <span>{number}</span>
      </button>
    </div>
  );
};

export default UsingState;
