import { render, cleanup, screen } from "@testing-library/react";
import theme from "../../assets/theme";
import GlobalStyles from "../../assets/globalStyles";
import { ThemeProvider } from "styled-components";
import TextInput from "./index";

describe("TextInput component", () => {
  const changeHandlerMock = jest.fn();

  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <TextInput
          inputValue="some value"
          id="some-id"
          labelText="some label"
          changeHandler={changeHandlerMock}
          name="some name"
        />
      </ThemeProvider>
    );
  });

  afterEach(cleanup);

  test("component should match prev snapshot", () => {
    const inputEl = screen.getByRole("textbox");

    expect(inputEl).toMatchSnapshot();
  });

  test("component should be on the DOM", () => {
    const inputEl = screen.getByRole("textbox");

    expect(inputEl).toBeInTheDocument();
  });

  test("input should have no children", () => {
    const inputEl = screen.getByRole("textbox");

    expect(inputEl.childElementCount).toBe(0);
  });

  test("input value should be expected value value", () => {
    const inputEl = screen.getByRole("textbox");

    expect(inputEl.textContent).toBe("some value");
  });
});
