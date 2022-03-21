import { render, cleanup, screen } from "@testing-library/react";
import theme from "../../assets/theme";
import GlobalStyles from "../../assets/globalStyles";
import { ThemeProvider } from "styled-components";
import JourneyTree from "../JourneyTree";
import { expectedTree } from "../../hooks/useFetchJourney.test";

describe("JourneyTree component", () => {
  const journeyHasTreeMock = expectedTree;

  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <JourneyTree journeyHasTree={journeyHasTreeMock} />
      </ThemeProvider>
    );
  });

  afterEach(cleanup);

  test("should match prev snapshot", () => {
    const tree = screen.getAllByRole("tree");

    expect(tree).toMatchSnapshot();
  });

  test("tree root must be in the DOM", () => {
    const tree = screen.getAllByRole("tree");

    expect(tree.at(0)).toBeInTheDocument();
  });

  test("tree root must only have 1 child", () => {
    const tree = screen.getAllByRole("tree");

    // @ts-ignore
    expect(tree.at(0).childElementCount).toBe(1);
  });

  test("nodes can have up to 2 children", () => {
    const tree = screen.getAllByRole("tree");

    // @ts-ignore
    expect(tree.at(4).childElementCount).toBe(2);
  });

  test("tree length should be inputted tree - parent section element(in this case 9)", () => {
    const tree = screen.getAllByRole("tree");

    expect(tree.length - 1).toBe(9);
  });
});
