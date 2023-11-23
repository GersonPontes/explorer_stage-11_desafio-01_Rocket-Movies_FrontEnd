import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: .5rem 1.6rem;
  border-radius: 1rem;

  margin-right: .8rem;
`;