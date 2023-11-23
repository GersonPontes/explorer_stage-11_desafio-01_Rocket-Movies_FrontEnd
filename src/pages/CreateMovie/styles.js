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
  width: 100%;

  overflow-y: auto;

  padding: 0 12.3rem;
`;

export const Form = styled.div`
  > h1 {
    font-size: 3.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > div {
    display: flex;
    gap: 4rem;

    margin-top: 4rem;
  }

  > h2 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_500};

    margin: 4rem 0 2.4rem;
  }
`;

export const MovieTags = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding: 1.6rem;
  border-radius: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
`;