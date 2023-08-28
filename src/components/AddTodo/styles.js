import { styled } from "styled-components";

export const Form = styled.form`
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid grey;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  margin-left: 8px;
  font-size: 16px;
  color: #2d3748;
  outline: none;
  margin-right: 8px;
  border: none;
  border-radius: 5px;
  padding: 2px;
`;

export const SubmitButton = styled.button`
  padding: 5px;
  background-color: royalblue;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: transparent;
  }
`;
