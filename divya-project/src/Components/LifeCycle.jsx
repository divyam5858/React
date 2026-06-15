import React, { useEffect, useState } from "react";

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `count is ${count}`;
  },[count]); //2parameters: 1.function, 2. dependency array 
// [] when dependency array is given mounting stage executes only once 
//   [count] exectues after every updation of value
  return (
    <div>
      <h1>LifeCycle </h1>
      <p>Count value is {count}</p>
      <button onClick={()=>{setCount(count+1)}}>Click</button>
    </div>
  );
};

export default LifeCycle;
