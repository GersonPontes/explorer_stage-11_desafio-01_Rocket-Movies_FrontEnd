import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
  }

  a {
    text-decoration: none;
  }
`;