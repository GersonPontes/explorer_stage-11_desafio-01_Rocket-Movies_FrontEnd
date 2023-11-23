import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas: 
  "header"
  "nav"
  "content";
  grid-template-rows: max-content max-content auto;
`;

export const Nav = styled.nav`
  grid-area: nav;
  padding: 4rem 12.3rem 2.4rem;
`

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;

  padding: 0 12.3rem;

  > span {
    display: flex;
    align-items: center;

    h1 {
      font-size: 3.6rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      margin-right: 2rem;
    }

    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-right: 1rem;
    }

    span {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }

  > span:nth-child(2) {
    display: flex;
    align-items: center;
    margin-top: 2.4rem;
    margin-bottom: 4.8rem;

    img {
      width: 1.6rem;
      height: 1.6rem;
      border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
      border-radius: 1rem;
      margin-right: .8rem;
    }

    strong {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      margin-right: 2rem;
    }

    svg {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-right: .8rem;
    }

    p {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > div {
    margin-top: 4rem;

    p {
      font-size: 1.6rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;