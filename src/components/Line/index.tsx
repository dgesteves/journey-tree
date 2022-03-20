import { IProps } from "./types";
import {
  VerticalLine,
  HorizontalLine,
  Connections,
  Root,
  Edges,
} from "./styles";
import { memo } from "react";

export default memo(function Line({ childrenNumber }: IProps) {
  if (childrenNumber < 1 || childrenNumber > 2) return null;
  return childrenNumber === 2 ? (
    <Connections role="separator" aria-label="connection line between nodes">
      <Root role="none">
        <VerticalLine role="none" />
      </Root>
      <HorizontalLine role="none" />
      <Edges role="none">
        <VerticalLine role="none" />
        <VerticalLine role="none" />
      </Edges>
    </Connections>
  ) : (
    <VerticalLine role="separator" aria-label="connection line between nodes" />
  );
});
