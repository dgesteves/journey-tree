import { Dispatch, SetStateAction } from "react";

export interface IProps {
  isEditing: boolean;
  heading: string;
  subHeading: string;
  stepId: string;
  stepType: string;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
  setHeading: Dispatch<SetStateAction<string>>;
  setSubHeading: Dispatch<SetStateAction<string>>;
}
