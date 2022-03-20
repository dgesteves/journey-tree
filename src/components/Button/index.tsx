import { IProps } from "./types";
import { ButtonStyle } from "./styles";
import { memo } from "react";

export default memo(function Button({ children, clickHandler, id }: IProps) {
  return (
    <ButtonStyle
      id={`save-button-${id}`}
      tabIndex={0}
      type="button"
      aria-label="save changes"
      onClick={clickHandler}
    >
      {children}
    </ButtonStyle>
  );
});
