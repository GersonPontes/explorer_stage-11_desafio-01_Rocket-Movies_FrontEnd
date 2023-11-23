import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 1rem;
  padding: 3.2rem;
  margin-bottom: 2.4rem;

  > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > span {

    margin: .8rem 0 1.2rem;

    svg {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    }
  } 

  > p {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_500};

    margin-bottom: 3.6rem;
  }
`;