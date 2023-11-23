import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  height: 4.8rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  border-radius: 1rem;
  padding: 1.3rem 3.2rem;

  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-size: 1.6rem;
  font-weight: 500;

  cursor: pointer;
  transition: filter .2s;

  &:hover{
    filter: brightness(.9);
  }
`;