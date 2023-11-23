import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  height: 4.8rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;
  border-radius: 1rem;
  padding: 1.3rem 3.2rem;

  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 1.6rem;
  font-weight: 500;

  cursor: pointer;
  transition: filter .2s;

  &:hover{
    filter: brightness(.9);
  }
`;