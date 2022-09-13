import React, { useState } from "react";
import styled from "styled-components";

const Test = () => {
  const [btn, setBtn] = useState<boolean>(false);

  const Button = styled.button`
    width: 200px;

    &:hover {
      background-color: red;
    }
  `;

  return (
    <div>
      <div className={`test ${btn ? "btntrue" : "btnfalse"}`}>test</div>
      <Button onClick={() => setBtn(!btn)}>클릭</Button>
    </div>
  );
};

export default Test;
