import styled from "styled-components";
import ReactDom from "react-dom";
import { BulbOutlined, BulbFilled } from "@ant-design/icons";
import React from "react";

interface Props {
  themeMode: string;
  onSetTheme: () => void;
}

const ThemeBtn = ({ themeMode, onSetTheme }: Props) => {
  // const { themeMode, onSetTheme } = useTheme();

  return ReactDom.createPortal(
    <Theme>
      <Div mode={themeMode}>
        <div>
          <BulbFilled />
        </div>
        <div>
          <BulbOutlined />
        </div>

        <Toggle mode={themeMode} onClick={onSetTheme} />
      </Div>
    </Theme>,
    document.querySelector("#components-portal") as HTMLElement
  );
};

const Theme = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
`;

const Div = styled.div<{ mode: string }>`
  background-color: ${(props) =>
    props.mode === "light" ? "white" : "#3b3b3bd6"};
  width: 80px;
  height: 35px;
  border-radius: 30px;
  border: 2px solid gray;

  display: flex;
  justify-content: space-around;
  align-items: center;

  position: relative;

  transition: all ease 0.5s;

  & div {
    width: 20px;
    height: 100%;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
`;

const Toggle = styled.span<{ mode: string }>`
  background-color: #808080;
  position: absolute;
  left: 10px;
  width: 25px;
  height: 25px;
  border-radius: 30px;
  border: 2px solid #4e4e4e;
  transition: all ease 0.5s;

  transform: ${(props) =>
    props.mode === "light" ? "translateX(0)" : "translateX(35px)"};

  &:hover {
    cursor: pointer;
    border: 2px solid #000000;
  }
`;

export default React.memo(ThemeBtn);
