import React, { useRef } from "react";

const FocusRef = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const handleClick1 = () => {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "red";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  };

  const handleClick2 = () => {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "red";
    inputRef1.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  };

  const handleClick3 = () => {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "red";
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
  };

  return (
    <div>
      <input type="text" ref={inputRef1} />
      <button onClick={handleClick1}>Click</button>
      <br />
      <input type="text" ref={inputRef2} />
      <button onClick={handleClick2}>Click</button>
      <br />
      <input type="text" ref={inputRef3} />
      <button onClick={handleClick3}>Click</button>
      <br />
    </div>
  );
};

export default FocusRef;
