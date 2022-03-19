import { IProps } from "./types";
import { ButtonStyle } from "./styles";

export default function Button({ children, setState, id }: IProps) {
  return (
    <ButtonStyle
      id={`save-button-${id}`}
      tabIndex={0}
      type="button"
      aria-label="save changes"
      onClick={() => setState(false)}
    >
      {children}
    </ButtonStyle>
  );
}
