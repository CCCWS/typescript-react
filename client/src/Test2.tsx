import React from "react";
import useCounter from "./hooks/useCounter";
import useInput from "./hooks/useInput";

const Test2 = () => {
  const input1 = useInput("");
  const input2 = useInput("");

  const count1 = useCounter("-");
  const count2 = useCounter("+");

  return (
    <div>
      <input value={input1.data} onChange={input1.onChange}></input>
      <button onClick={input1.onAlert}>input1</button>

      <br />

      <input value={input2.data} onChange={input2.onChange}></input>
      <button onClick={input2.onAlert}>input2</button>

      <br />

      <div>{count1.count}</div>
      <div>{count2.count}</div>
    </div>
  );
};

export default Test2;
