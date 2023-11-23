import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.PINK};

  cursor: pointer;
  transition: filter .2s;

  &:hover{
    filter: brightness(.9);
  }
`