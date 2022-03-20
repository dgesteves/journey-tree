import { render, cleanup, screen } from "@testing-library/react";
import Description from "./index";
import theme from "../../assets/theme";
import GlobalStyles from "../../assets/globalStyles";
import { ThemeProvider } from "styled-components";

describe("Description component", () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Description />
      </ThemeProvider>
    );
  });

  afterEach(cleanup);

  test("component should match prev snapshot", () => {
    const articleEl = screen.getByText(/lorem ipsum/i);

    expect(articleEl).toMatchSnapshot();
  });

  test("component should be on the DOM", () => {
    const articleEl = screen.getByText(/lorem ipsum/i);

    expect(articleEl).toBeInTheDocument();
  });

  test("component should have 2 children", () => {
    const articleEl = screen.getByText(/lorem ipsum/i);
    expect(articleEl.childElementCount).toBe(2);
  });
});
