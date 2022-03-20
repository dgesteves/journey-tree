import { HEADING_TEXT_LABEL, SUB_HEADING_TEXT_LABEL } from "../../constants";
import TextInput from "../TextInput";
import Button from "../Button";
import { IProps } from "./types";
import { memo } from "react";

export default memo(function EditStepMode({
  stepId,
  changeHeadingHandler,
  changeSubHeadingHandler,
  clickHandler,
  heading,
  subHeading,
}: IProps) {
  return (
    <>
      <TextInput
        inputValue={heading}
        labelText={HEADING_TEXT_LABEL}
        changeHandler={changeHeadingHandler}
        name={HEADING_TEXT_LABEL}
        id={stepId}
      />
      <TextInput
        inputValue={subHeading}
        labelText={SUB_HEADING_TEXT_LABEL}
        changeHandler={changeSubHeadingHandler}
        name={SUB_HEADING_TEXT_LABEL}
        id={stepId}
      />
      <Button clickHandler={clickHandler} id={stepId}>
        Save
      </Button>
    </>
  );
});
