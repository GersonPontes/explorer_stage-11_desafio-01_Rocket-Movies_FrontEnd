import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 11.8rem max-content auto;
  grid-template-areas: 
  "header"
  "section"
  "content";
`;

export const Section = styled.div`
  display: grid;
  grid-area: section;
  grid-template-columns: max-content max-content;
  align-items: center;
  justify-content: space-between;

  padding: 5rem 12.3rem 3.7rem;

  > h1 {
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE};
    }
`

export const Content = styled.div`
  grid-area: content;
  padding: 0 12.3rem 5rem;
  overflow-y: auto;
`;