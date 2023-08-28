import styled from "styled-components";

export const Button = styled.button`
  padding: 3px;
  width: 90px;
  border-radius: 5px;
  background-color: ${(props) => props.$background};
  color: white;
`;

export const Description = styled.p`
  margin-left: 5px;
  margin-right: 5px;
  font-weight: 600;
`;

export const TodoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;
