import { render, cleanup, screen } from "@testing-library/react";
import theme from "../../assets/theme";
import GlobalStyles from "../../assets/globalStyles";
import { ThemeProvider } from "styled-components";
import DisplayStepMode from "./index";
import { SUB_HEADING } from "../../constants";

describe("DisplayStepMode component", () => {
  const clickHandlerMock = jest.fn();
  const stepType = "something";

  afterEach(cleanup);

  test("heading should match prev snapshot", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DisplayStepMode
          stepType={stepType}
          clickHandler={clickHandlerMock}
          subHeading=""
          heading=""
        />
      </ThemeProvider>
    );

    const headingEl = screen.getByRole("heading");

    expect(headingEl).toMatchSnapshot();
  });

  test("subHeading should match prev snapshot", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DisplayStepMode
          stepType={stepType}
          clickHandler={clickHandlerMock}
          subHeading=""
          heading=""
        />
      </ThemeProvider>
    );

    const subHeadingEl = screen.getByText(SUB_HEADING);

    expect(subHeadingEl).toMatchSnapshot();
  });

  test("heading should be in the DOM", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DisplayStepMode
          stepType={stepType}
          clickHandler={clickHandlerMock}
          subHeading=""
          heading=""
        />
      </ThemeProvider>
    );

    const headingEl = screen.getByRole("heading");

    expect(headingEl).toBeInTheDocument();
  });

  test("subHeading should be in the DOM", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DisplayStepMode
          stepType={stepType}
          clickHandler={clickHandlerMock}
          subHeading=""
          heading=""
        />
      </ThemeProvider>
    );

    const subHeadingEl = screen.getByText(SUB_HEADING);

    expect(subHeadingEl).toBeInTheDocument();
  });

  test("heading textContent should be 'stepType.toUpperCase()' if heading prop is'' ", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DisplayStepMode
          stepType={stepType}
          clickHandler={clickHandlerMock}
          subHeading=""
          heading=""
        />
      </ThemeProvider>
    );

    const headingEl = screen.getByRole("heading");

    expect(headingEl.textContent).toBe(stepType.toUpperCase());
  });

  test("subHeading textContent should be 'SUB_HEADING' if subHeading prop is'' ", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DisplayStepMode
          stepType={stepType}
          clickHandler={clickHandlerMock}
          subHeading=""
          heading=""
        />
      </ThemeProvider>
    );

    const subHeadingEl = screen.getByText(SUB_HEADING);

    expect(subHeadingEl.textContent).toBe(SUB_HEADING);
  });

  test("heading textContent should be prop value if subHeading prop is not '' ", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DisplayStepMode
          stepType={stepType}
          clickHandler={clickHandlerMock}
          subHeading=""
          heading="some heading..."
        />
      </ThemeProvider>
    );

    const headingEl = screen.getByRole("heading");

    expect(headingEl.textContent).toBe("some heading...");
  });

  test("subHeading textContent should be prop value if subHeading prop is not '' ", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DisplayStepMode
          stepType={stepType}
          clickHandler={clickHandlerMock}
          subHeading="asdasd asdasd asdasd"
          heading=""
        />
      </ThemeProvider>
    );

    const subHeadingEl = screen.getByLabelText("node sub heading");

    expect(subHeadingEl.textContent).toBe("asdasd asdasd asdasd");
  });
});
