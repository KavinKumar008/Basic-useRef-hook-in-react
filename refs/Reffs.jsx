import React, { useState, useRef, useEffect } from "react";

const Reffs = () => {
  const [input, setInput] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current = input;
  }, [input]);

  const display = () => {
    console.log(inputRef.current);
    // inputRef.current.focus();
  };

  console.log("getting rendered");
  return (
    <div>
      <input
        // ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <p>My Name is : {input}</p>
      <p>My Name is : {inputRef.current}</p>
      <button onClick={display}>Show Data</button>
    </div>
  );
};

export default Reffs;
