import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  display: grid;
  grid-template-areas: "brand search profile";
  grid-template-columns: max-content auto max-content;
  align-items: center;
  gap: 5rem;

  width: 100%;
  height: 11.6rem;
  
  border-bottom-width: .1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  padding: 0 12.3rem;
`;

export const Brand = styled(Link)`
  grid-area: brand;

  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Search = styled.form`
  grid-area: search;
`;

export const Profile = styled.div`
  grid-area: profile;
  
  display: flex;
  align-items: center;
  gap: 1rem;

  > div {
    display: grid;
    grid-template-columns: max-content;
    justify-items: end;

    strong {
      cursor: pointer;
      font-size: 1.4rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    span {
      cursor: pointer;
      width: fit-content;
      font-size: 1.4rem;
      font-weight: 400; 
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
  }

  > img {
    cursor: pointer;
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`;