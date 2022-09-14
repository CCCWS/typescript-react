import React from "react";
import styled from "styled-components";

import Button from "./Button";

interface Props {
  title: string;
  message: string;
  modalOpen: boolean;
  setModalOpen: (d: boolean) => void;
}

const Modal = ({ title, message, modalOpen, setModalOpen }: Props) => {
  return (
    <ModalDiv modalOpen={modalOpen}>
      <div>
        <Header>
          <div>{title}</div>
        </Header>

        <Message>
          <p>{message}</p>
        </Message>

        <Footer>
          <Button innerText={"닫기"} clickFunc={() => setModalOpen(false)} />
        </Footer>
      </div>
    </ModalDiv>
  );
};

const ModalDiv = styled.div<{ modalOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.445);

  display: flex;
  opacity: ${(props) => (props.modalOpen ? "1" : "0")};
  z-index: ${(props) => (props.modalOpen ? "10" : "-10")};

  justify-content: center;
  align-items: center;

  transition: all ease 0.3s;

  & > :first-child {
    background-color: #ff9b9b;
    width: 350px;
    height: 200px;
    border-radius: 15px;
    z-index: 100;
    overflow: hidden;
    position: relative;
  }
`;

const Header = styled.header`
  background-color: #ffe2b7;
  padding: 1rem;
  font-size: 20px;
`;

const Message = styled.div`
  padding: 1rem;
`;

const Footer = styled.footer`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

export default Modal;
