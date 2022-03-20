import { Heading, SubHeading } from "./styles";
import { SUB_HEADING } from "../../constants";
import { memo } from "react";
import { IProps } from "./types";

export default memo(function DisplayStepMode({
  clickHandler,
  heading,
  subHeading,
  stepType,
}: IProps) {
  return (
    <>
      <Heading
        tabIndex={0}
        role="heading"
        aria-label="node heading"
        onClick={clickHandler}
      >
        {heading || stepType.toUpperCase()}
      </Heading>
      <SubHeading
        tabIndex={0}
        aria-label="node sub heading"
        onClick={clickHandler}
      >
        {subHeading || SUB_HEADING}
      </SubHeading>{" "}
    </>
  );
});
