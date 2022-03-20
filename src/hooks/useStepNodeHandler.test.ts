import { renderHook, act } from "@testing-library/react-hooks";
import useStepNodeHandler from "./useStepNodeHandler";

describe("useStepNodeHandler hook", () => {
  test("heading state should be '' at start", () => {
    const { result } = renderHook(() => useStepNodeHandler());

    expect(result.current.heading).toEqual("");
  });

  test("heading state should be updated correctly", () => {
    const { result } = renderHook(() => useStepNodeHandler());

    act(() => {
      result.current.setHeading("new heading");
    });

    expect(result.current.heading).toEqual("new heading");
  });

  test("isEditing state should start as false", () => {
    const { result } = renderHook(() => useStepNodeHandler());

    expect(result.current.isEditing).toEqual(false);
  });

  test("isEditing state should be true when editClickHandler() is called", () => {
    const { result } = renderHook(() => useStepNodeHandler());

    expect(result.current.isEditing).toEqual(false);

    act(() => {
      result.current.editClickHandler();
    });

    expect(result.current.isEditing).toEqual(true);
  });

  test("subHeading state should be '' at start", () => {
    const { result } = renderHook(() => useStepNodeHandler());

    expect(result.current.subHeading).toEqual("");
  });

  test("subHeading state should be updated correctly", () => {
    const { result } = renderHook(() => useStepNodeHandler());

    act(() => {
      result.current.setSubHeading("new sub-Heading");
    });

    expect(result.current.subHeading).toEqual("new sub-Heading");
  });

  test("isEditing state should change to back to false when saveClickHandler is caled", () => {
    const { result } = renderHook(() => useStepNodeHandler());

    expect(result.current.isEditing).toEqual(false);

    act(() => {
      result.current.editClickHandler();
    });

    expect(result.current.isEditing).toEqual(true);

    act(() => {
      result.current.saveClickHandler();
    });

    expect(result.current.isEditing).toEqual(false);
  });
});
