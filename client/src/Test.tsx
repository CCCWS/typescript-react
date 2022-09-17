import React, { useRef, useState } from "react";
import styled from "styled-components";
import styles from "./Test.module.css";
import Wrapper from "./components/Wrapper";
import Button from "./components/UI/Button";
import Modal from "./components/UI/Modal";
import useAxios from "./hooks/useAxios";

const Test = () => {
  const [bool, setBool] = useState<boolean>(false);
  const [num, setNum] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalMassage, setModalMassage] = useState<{
    title: string;
    massage: string;
  }>();


  const setNumhendler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNum(parseInt(e.target.value));
  };

  const onClick = () => {
    setModalOpen(true);
  };

  const onSubmitEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (num <= 50) {
      setModalMassage({
        title: "Number Error",
        massage: "올바른 숫자를 입력해 주세요.",
      });
      setModalOpen(true);
    }
    setNum(0);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <React.Fragment>
      <Modal
        title={modalMassage?.title || "모달창"}
        message={modalMassage?.massage || "메세지"}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />

      <Div bool={bool} num={num} ref={divRef}>
        <div>test</div>
      </Div>

      <form onSubmit={onSubmitEvent}>
        <Input
          type="number"
          min={0}
          max={100}
          onChange={setNumhendler}
          placeholder="50이상 입력"
          ref={inputRef}
        ></Input>
      </form>

      

      <Button innerText={"테스트"} clickFunc={onClick} />
    </React.Fragment>
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
