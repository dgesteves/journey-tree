import { Heading, SubHeading } from "./styles";
import {
  HEADING_TEXT_LABEL,
  SUB_HEADING,
  SUB_HEADING_TEXT_LABEL,
} from "../../constants";
import TextInput from "../TextInput";
import Button from "../Button";
import { IProps } from "./types";

export default function EditStep({
  isEditing,
  heading,
  setHeading,
  stepId,
  subHeading,
  setSubHeading,
  setIsEditing,
  stepType,
}: IProps) {
  return isEditing ? (
    <>
      <TextInput
        labelText={HEADING_TEXT_LABEL}
        inputValue={heading}
        setState={setHeading}
        name="Heading"
        id={stepId}
      />
      <TextInput
        labelText={SUB_HEADING_TEXT_LABEL}
        inputValue={subHeading}
        setState={setSubHeading}
        name="sub-heading"
        id={stepId}
      />
      <Button setState={setIsEditing} id={stepId}>
        Save
      </Button>
    </>
  ) : (
    <>
      <Heading
        tabIndex={0}
        role="heading"
        aria-label="node heading"
        onClick={() => setIsEditing(true)}
      >
        {heading || stepType.toUpperCase()}
      </Heading>
      <SubHeading
        tabIndex={0}
        aria-label="node sub heading"
        onClick={() => setIsEditing(true)}
      >
        {subHeading || SUB_HEADING}
      </SubHeading>{" "}
    </>
  );
}
