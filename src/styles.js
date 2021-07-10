import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "lightgray",
  borderColor: "rgb(219,219,219)",
};

export const darkTheme = {
  fontColor: "lightgray",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    input {
      border:0;
    }
    * {
      box-sizing: border-box;
    }

    input {
      all:unset;
    }

    body {
        background-color: #FAFAFA;
        font-size: 14px;
    }
`;
