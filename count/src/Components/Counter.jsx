import React, { useState } from "react";
import "./Counter.css"
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleclick1 = () => {
    setCount(count + 1);
  };

  const handleclick2 = () => {
    setCount(count - 1);
  };

  const handleclick3 = () => {
    setCount(count * 3);
  };

  const handleclick4 = () => {
    setCount(count / 5);
  };

  const Reset =()=>{
    setCount(0)
  }

  return (
    <div className="container">
      <h1>My Counter App</h1>
      <p>My Count : {count}</p>
      <button onClick={handleclick1}>+</button>
      <button disabled={(count === 0)} onClick={handleclick2}>
        -
      </button>
      <button onClick={handleclick3}>* BY 3</button>
      <button onClick={handleclick4}>/ BY 5</button>
      <button onClick={Reset}>Clear</button>
    </div>
  );
};

export default Counter;
