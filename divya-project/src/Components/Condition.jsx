// Conditional Rendering
// -------------------- IF-Else ----------------------------------

import React from "react";

let Condition = () => {
  let age = 35;

  // IF-ELSE
  let msg;

  if (age >= 18) {
    msg = <h2>You are eligible to vote</h2>;
  } else {
    msg = <h2>You are not eligible to vote</h2>;
  }

  return (
    <>
      <h1>If Else Statement</h1>
      {msg}

      <h1>Ternary Operator</h1>
      {age >= 18 ? (
        <h2>You are eligible to vote</h2>
      ) : (
        <h2>You are not eligible to vote</h2>
      )}

      <h1>&& Operator</h1>
      {age >= 18 && <h2>You are eligible to vote</h2>}
    </>
  );
};

export default Condition;

