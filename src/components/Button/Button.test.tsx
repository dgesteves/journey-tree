import { render, cleanup, screen } from "@testing-library/react";
import theme from "../../assets/theme";
import GlobalStyles from "../../assets/globalStyles";
import { ThemeProvider } from "styled-components";
import Button from "./index";

describe("Button component", () => {
  const clickHandlerMock = jest.fn();

  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Button clickHandler={clickHandlerMock} id={"some-id"}>
          something
        </Button>
      </ThemeProvider>
    );
  });

  afterEach(cleanup);

  test("component should match prev snapshot", () => {
    const buttonEl = screen.getByRole("button");

    expect(buttonEl).toMatchSnapshot();
  });

  test("component should be on the DOM", () => {
    const buttonEl = screen.getByRole("button");

    expect(buttonEl).toBeInTheDocument();
  });

  test("component should have no children", () => {
    const buttonEl = screen.getByRole("button");

    expect(buttonEl.childElementCount).toBe(0);
  });

  test("component {children} should of type string", () => {
    const buttonEl = screen.getByRole("button");

    expect(typeof buttonEl.textContent).toBe("string");
  });

  test("component {children} should get set to correct value", () => {
    const buttonEl = screen.getByRole("button");

    expect(buttonEl.textContent).toBe("something");
  });
});
