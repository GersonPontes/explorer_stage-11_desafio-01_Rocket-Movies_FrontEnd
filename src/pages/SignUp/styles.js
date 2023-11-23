import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas: 
  "content background";
  grid-template-columns: max-content auto;
`

export const Content = styled.div`
  grid-area: content;
`

export const Form = styled.form`
  width: 63rem;
  padding: 20rem 13rem;

  > h1 {
    font-size: 4.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin: 4.8rem 0;
  }

  > div {
    margin-bottom: .8rem;
  }

  > a {
    display: flex;
    justify-content: center;
    margin: 1.2rem 0 4.2rem;
  }
`

export const Background = styled.div`
  grid-area: background;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;