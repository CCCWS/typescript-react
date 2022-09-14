import styled from "styled-components";

interface Props {
  innerText: string;
  clickFunc: any;
}

const Button = ({ innerText, clickFunc }: Props) => {
  return <ButtonStyled onClick={clickFunc}>{innerText}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  border-radius: 10%;
  border: none;
  background-color: #9696fc;
  font-size: 16px;

  width: 100px;
  height: 40px;

  transition: all ease 0.5s;

  &:hover {
    cursor: pointer;
    background-color: #616161;
  }
`;
export default Button;
