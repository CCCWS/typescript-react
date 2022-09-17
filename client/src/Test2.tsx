import React, { useEffect } from "react";
import Timer from "./components/UI/Timer";
import useAxios from "./hooks/useAxios";
import useInput from "./hooks/useInput";

const Test2 = () => {
  const input1 = useInput("");
  const input2 = useInput("");
  const id = useInput("");

  const [data, loading] = useAxios(
    `https://jsonplaceholder.typicode.com/todos/${id.data}`,
    id.test
  );

  return (
    <div>
      <form onSubmit={id.onSubmit}>
        <input value={id.data} onChange={id.onChange}></input>
        <button type="submit" onSubmit={id.onSubmit}>
          input1
        </button>
      </form>

      <br />

      {loading ? (
        <div>Loding...</div>
      ) : (
        <div>
          {data.id} {data.title}
        </div>
      )}

      <br />

      <Timer />
    </div>
  );
};

export default React.memo(Test2);
