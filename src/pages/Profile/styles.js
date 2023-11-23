import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Header = styled.div`
  display: grid;
  align-items: center;
  
  width: 100%;
  height: 14.4rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 0 14.4rem;
`;

export const Form = styled.form`
  width: 34rem;
  margin: 0 auto;

  > div {
    margin-bottom: .8rem;
  }

  > div:first-child {
    margin-bottom: 6.4rem
  }

  > div:nth-child(3), 
    div:nth-child(5) {
    margin-bottom: 2.4rem;
  }
`

export const Avatar = styled.div`
    position: relative;

    width: 18.6rem;
    height: 18.6rem;
    margin: -9.3rem auto 0;

    text-align: center;

  > img {
    width: 18.6rem;
    height: 18.6rem;

    border-radius: 50%;
  }

  > label {
    position: absolute;
    right: .7rem;
    bottom: .7rem;

    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }

    input {
      display: none;
    }
  }

  > label:hover {
    cursor: pointer;
  }
`