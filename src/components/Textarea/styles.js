import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border-radius: 1rem;

  color: ${({ theme }) => theme.COLORS.GRAY_400};

  > textarea {
    width: 100%;
    height: 27.4rem;

    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    padding: 1.9rem 1.2rem;

    resize: none;
    }

    ::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
`;