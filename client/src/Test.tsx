import React, { useEffect, useState } from "react";
import styled from "styled-components";
import styles from "./Test.module.css";
import Wrapper from "./components/Wrapper";
import Button from "./components/UI/Button";
import Modal from "./components/UI/Modal";

const Test = () => {
  const [bool, setBool] = useState<boolean>(false);
  const [num, setNum] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const setNumhendler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNum(parseInt(e.target.value));
  };

  const onClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Modal
        title={"Modal"}
        message={"모달창 테스트"}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />

      <Div bool={bool} num={num}>
        <div>test</div>
      </Div>

      <Input
        type="number"
        min={0}
        max={100}
        onChange={setNumhendler}
        value={num || ""}
      ></Input>
      <br />

      <div className={styles.test}>test</div>

      <Button innerText={"테스트"} clickFunc={onClick} />
    </>
  );
};

interface Props {
  bool?: boolean;
  num?: number;
}

const Div = styled.div<Props>`
  & div {
    width: ${(props) => (props.bool ? "100px" : "200px")};
    height: 100px;
    background-color: ${(props) => props.num! === 100 && "yellow"};
    background-color: ${(props) => props.num! <= 80 && "blue"};
    background-color: ${(props) => props.num! <= 60 && "red"};
    background-color: ${(props) => props.num! <= 40 && "black"};
    background-color: ${(props) => props.num! <= 20 && "pink"};
    background-color: ${(props) => props.num! === 0 && "green"};
    transition: all ease 1s;

    @media (max-width: 500px) {
      width: 100%;
    }
  }

  & div:hover {
    background: yellow;
    width: 300px;
    height: 300px;
    transition: all ease 1s;
  }
`;

const Input = styled.input`
  width: 100px;
`;

export default Test;
