import { render, cleanup, screen } from "@testing-library/react";
import theme from "../../assets/theme";
import GlobalStyles from "../../assets/globalStyles";
import { ThemeProvider } from "styled-components";
import Line from "./index";

describe("Line component", () => {
  afterEach(cleanup);

  test("component should match prev snapshot of childrenNumber equal to 1", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Line childrenNumber={1} />
      </ThemeProvider>
    );
    const divEl = screen.queryByRole("separator");

    expect(divEl).toMatchSnapshot();
  });

  test("component should match prev snapshot of childrenNumber equal to 2", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Line childrenNumber={2} />
      </ThemeProvider>
    );
    const divEl = screen.queryByRole("separator");

    expect(divEl).toMatchSnapshot();
  });

  test("component should 'NOT' be in the dom if childrenNumber is less than 1", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Line childrenNumber={0} />
      </ThemeProvider>
    );
    const divEl = screen.queryByRole("separator");

    expect(divEl).not.toBeInTheDocument();
  });

  test("component should 'NOT' be in the dom if childrenNumber is bigger than 2", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Line childrenNumber={3} />
      </ThemeProvider>
    );
    const divEl = screen.queryByRole("separator");

    expect(divEl).not.toBeInTheDocument();
  });

  test("component should be in the dom if childrenNumber is equal to 1", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Line childrenNumber={1} />
      </ThemeProvider>
    );
    const divEl = screen.getByRole("separator");

    expect(divEl).toBeInTheDocument();
  });

  test("childrenNumber equal to 1 should have no children", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Line childrenNumber={1} />
      </ThemeProvider>
    );
    const divEl = screen.getByRole("separator");

    expect(divEl.childElementCount).toBe(0);
  });

  test("childrenNumber equal to 2 should have 3 children", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Line childrenNumber={2} />
      </ThemeProvider>
    );
    const divEl = screen.getByRole("separator");

    expect(divEl.childElementCount).toBe(3);
  });
});
