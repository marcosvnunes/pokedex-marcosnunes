import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}
export const Container = styled.div<ContainerProps>`
  padding:0 1rem;
  display:flex;
  align-items:center;
  width: 410px;
  height: 40px;
  margin: 24px auto 16px;
  color: #707070;
  border: 1px solid #EAEFFB;
  border-radius: 4px;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
  props.isErrored &&
  css`
    border: 2px solid #c53030;
    color: #c53030;
  `}

  ${(props) =>
  props.isFocused &&
  css`
    border: 2px solid #2F55CC;
    color: #2F55CC;
  `}
  input {
    background: transparent;
    border: 0 none;
    outline: 0;
    flex: 1;  
    color: #707070;
    ::placeholder {
      color: #C2C2C2;
    }
  }
  span {
    width:100px;
    font-size:0.6rem;
    text-align:center;
  }
`;
