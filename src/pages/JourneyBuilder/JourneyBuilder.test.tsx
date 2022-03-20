import { cleanup, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../assets/theme";
import GlobalStyles from "../../assets/globalStyles";
import JourneyBuilderPage from "./index";
import { JOURNEY_BUILDER } from "../../constants";

describe("JourneyBuilderPage component", () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <JourneyBuilderPage />
      </ThemeProvider>
    );
  });

  afterEach(cleanup);

  test("component should match prev snapshot", () => {
    const mainEl = screen.getByTestId("JourneyBuilderPage-comp");

    expect(mainEl).toMatchSnapshot();
  });

  test("component should have the heading", () => {
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("component should have 3 children", () => {
    const mainEl = screen.getByTestId("JourneyBuilderPage-comp");
    expect(mainEl.childElementCount).toBe(3);
  });

  test("heading should have the correct text content", () => {
    const heading = screen.getByRole("heading");

    expect(heading.textContent).toBe(JOURNEY_BUILDER);
  });
});
