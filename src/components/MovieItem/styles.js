import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 30%;
  align-items: center;

  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_600};
  border: ${({ theme, $isnew }) => $isnew ? `.1rem dashed ${theme.COLORS.GRAY_400}` : "none"};
  border-radius: 1rem;
  
  padding-right: 1.6rem;

  > input {
    width: 100%;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;    
    border: none;
    padding: 2rem 1.6rem;
  }

  > button {
    border: none;
    background: none;

    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

`;