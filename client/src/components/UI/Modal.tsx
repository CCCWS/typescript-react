import styled from "styled-components";
import Button from "./Button";
import ReactDom from "react-dom";
//react-dom을 이용한 portal
//root에 랜더링하는게 아닌 index.html에서 만들어준 새로운 위치에 랜더링함
//다른요소에 깊숙히 둘려싸여 있어도 항상 지정한 위치에 랜더링됨

// ReactDom.createPortal(<랜더링할 내용 JSX로 작성>,
// document.querySelector("(해당 위치의 ID)") as HTMLElement)

interface Props {
  title: string;
  message: string;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const Modal = ({ title, message, modalOpen, setModalOpen }: Props) => {
  return ReactDom.createPortal(
    <ModalDiv
      modalOpen={modalOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setModalOpen(false);
        }
      }}
    >
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
    </ModalDiv>,
    document.querySelector("#modal-portal") as HTMLElement
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
