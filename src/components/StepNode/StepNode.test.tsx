import { render, cleanup, screen } from "@testing-library/react";
import theme from "../../assets/theme";
import GlobalStyles from "../../assets/globalStyles";
import { ThemeProvider } from "styled-components";
import StepNode from "./index";

describe("StepNode component", () => {
  const childrenMock = [
    {
      id: "5537144e-21c6-4c5f-928c-2e219bc52572",
      stepId: "12a72da0-7a4e-4b3e-a8e6-6364b527f465",
      stepType: "email",
      path: "A.B.C.D.YES.YES",
      children: [],
    },
    {
      id: "96299884-2324-4835-9208-b59661328ea1",
      stepId: "a021a1da-cc84-4d32-aed5-1c8da9cd65d0",
      stepType: "wait",
      path: "A.B.C.D.YES.NO",
      children: [],
    },
  ];

  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StepNode
          stepId="some-id"
          stepType="wait"
          children={childrenMock}
          id="other-id"
          path="A.B.C.D.YES"
        />
      </ThemeProvider>
    );
  });

  afterEach(cleanup);

  test("should match prev snapshot", () => {
    const tree = screen.getAllByLabelText("tree node or step in the journey");

    expect(tree).toMatchSnapshot();
  });

  test("parent should be in the DOM", () => {
    const parent = screen
      .getAllByLabelText("tree node or step in the journey")
      .at(0);

    expect(parent).toBeInTheDocument();
  });
});

/**
 * @todo need to test children components in integration
 */
