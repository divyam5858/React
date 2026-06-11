import { useState } from "react";

let Usestate = () => {
  const [count, setCount] = useState(0);

  const changecount = () => {
    setCount(count + 1);
  };

  const countdec = () => {
    setCount(count-1);
  };
  const reset = () => {
    setCount(0);
  };
  const [name, changename] = useState("Raj");
  const namechange = () => {
    changename("Nagaraj");
  };
  return (
    <div>
      <p>Count is {count}</p>
      <button onClick={changecount}>Increment</button>
      <button onClick={countdec}>Decrement</button>
      <button onClick={reset}>Rest</button>
      <p>My name is {name}</p>
      <button onClick={namechange}>Change</button>
    </div>
  );
};

export default Usestate;
