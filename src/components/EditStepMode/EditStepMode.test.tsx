import { render, cleanup, screen } from "@testing-library/react";
import theme from "../../assets/theme";
import GlobalStyles from "../../assets/globalStyles";
import { ThemeProvider } from "styled-components";
import EditStepMode from "./index";
import { HEADING_TEXT_LABEL, SUB_HEADING_TEXT_LABEL } from "../../constants";

describe("EditStepMode component", () => {
  const clickHandlerMock = jest.fn();
  const changeHeadingHandlerMock = jest.fn();
  const changeSubHeadingHandlerMock = jest.fn();

  afterEach(cleanup);

  test("input heading should match prev snapshot", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <EditStepMode
          stepId="some-id"
          subHeading=""
          heading=""
          clickHandler={clickHandlerMock}
          changeHeadingHandler={changeHeadingHandlerMock}
          changeSubHeadingHandler={changeSubHeadingHandlerMock}
        />
      </ThemeProvider>
    );

    const headingInputEl = screen.getByLabelText(HEADING_TEXT_LABEL);

    expect(headingInputEl).toMatchSnapshot();
  });

  test("input subHeading should match prev snapshot", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <EditStepMode
          stepId="some-id"
          subHeading=""
          heading=""
          clickHandler={clickHandlerMock}
          changeHeadingHandler={changeHeadingHandlerMock}
          changeSubHeadingHandler={changeSubHeadingHandlerMock}
        />
      </ThemeProvider>
    );

    const subHeadingInputEl = screen
      .getAllByLabelText(SUB_HEADING_TEXT_LABEL)
      .at(1);

    expect(subHeadingInputEl).toMatchSnapshot();
  });

  test("save button should match prev snapshot", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <EditStepMode
          stepId="some-id"
          subHeading=""
          heading=""
          clickHandler={clickHandlerMock}
          changeHeadingHandler={changeHeadingHandlerMock}
          changeSubHeadingHandler={changeSubHeadingHandlerMock}
        />
      </ThemeProvider>
    );

    const buttonEl = screen.getByRole("button");

    expect(buttonEl).toMatchSnapshot();
  });

  test("input heading should be in the DOM", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <EditStepMode
          stepId="some-id"
          subHeading=""
          heading=""
          clickHandler={clickHandlerMock}
          changeHeadingHandler={changeHeadingHandlerMock}
          changeSubHeadingHandler={changeSubHeadingHandlerMock}
        />
      </ThemeProvider>
    );

    const headingInputEl = screen.getByLabelText(HEADING_TEXT_LABEL);

    expect(headingInputEl).toBeInTheDocument();
  });

  test("input subHeading heading should be in the DOM", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <EditStepMode
          stepId="some-id"
          subHeading=""
          heading=""
          clickHandler={clickHandlerMock}
          changeHeadingHandler={changeHeadingHandlerMock}
          changeSubHeadingHandler={changeSubHeadingHandlerMock}
        />
      </ThemeProvider>
    );

    const subHeadingInputEl = screen
      .getAllByLabelText(SUB_HEADING_TEXT_LABEL)
      .at(1);

    expect(subHeadingInputEl).toBeInTheDocument();
  });

  test("save button should be in the DOM", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <EditStepMode
          stepId="some-id"
          subHeading=""
          heading=""
          clickHandler={clickHandlerMock}
          changeHeadingHandler={changeHeadingHandlerMock}
          changeSubHeadingHandler={changeSubHeadingHandlerMock}
        />
      </ThemeProvider>
    );

    const buttonEl = screen.getByRole("button");

    expect(buttonEl).toBeInTheDocument();
  });

  test("input heading value should be expected value from 'inputValue' prop", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <EditStepMode
          stepId="some-id"
          subHeading=""
          heading="something..."
          clickHandler={clickHandlerMock}
          changeHeadingHandler={changeHeadingHandlerMock}
          changeSubHeadingHandler={changeSubHeadingHandlerMock}
        />
      </ThemeProvider>
    );

    const headingInputEl = screen.getByLabelText(HEADING_TEXT_LABEL);

    expect((headingInputEl as HTMLInputElement).value).toBe("something...");
  });

  test("input subHeading value should be expected value from 'inputValue' prop", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <EditStepMode
          stepId="some-id"
          subHeading="This is the new Value!!"
          heading="something..."
          clickHandler={clickHandlerMock}
          changeHeadingHandler={changeHeadingHandlerMock}
          changeSubHeadingHandler={changeSubHeadingHandlerMock}
        />
      </ThemeProvider>
    );

    const subHeadingInputEl = screen
      .getAllByLabelText(SUB_HEADING_TEXT_LABEL)
      .at(1);

    expect((subHeadingInputEl as HTMLInputElement).value).toBe(
      "This is the new Value!!"
    );
  });
});
