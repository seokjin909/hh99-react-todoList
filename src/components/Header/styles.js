import styled from "styled-components";

export const HeaderArea = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  align-items: center;
  background-color: var(--color-bg-dark);
  border-bottom: 1px solid var(--color-grey);
`;

export const Toggle = styled.button`
  font-size: 1.5rem;
  cursor: pointer;
  background-color: transparent;
  color: var(--color-text);
  transition: all 150ms ease-out;
  :hover {
    color: var(--color-accent);
  }
`;
