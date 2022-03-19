import { IProps } from "./types";
import {
  VerticalLine,
  HorizontalLine,
  Connections,
  Root,
  Edges,
} from "./styles";

export default function Line({ childrenNumber }: IProps) {
  if (childrenNumber < 1) return null;
  if (childrenNumber === 2) {
    return (
      <Connections>
        <Root>
          <VerticalLine />
        </Root>
        <HorizontalLine />
        <Edges>
          <VerticalLine />
          <VerticalLine />
        </Edges>
      </Connections>
    );
  } else return <VerticalLine />;
}
