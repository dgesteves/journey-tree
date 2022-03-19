import "styled-components";
import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    white: "#ffffff",
    background: "#1D1E22",
    violet: "#c43ad6",
    turquoise: "#30CFD0",
  },
  sizes: {
    size_1: "0.625rem",
    size_2: "0.75rem",
    size_3: "0.875rem",
    size_4: "1rem",
    size_5: "1.125rem",
    size_6: "1.25rem",
    size_7: "1.5rem",
    size_8: "1.875rem",
    size_9: "2rem",
  },
  gradients: {
    textGradient: "linear-gradient(to right, #30CFD0, #c43ad6)",
  },
  shadows: {
    textShadow:
      "0 0 80px rgb(192 219 255 / 35%), 0 0 32px rgb(65 120 255 / 24%)",
  },
};

export default theme;
