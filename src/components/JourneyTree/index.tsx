import { IJourney } from "./types";
import StepNode from "../StepNode";
import { TreeContainer } from "./styles";
import { memo } from "react";

export default memo(function JourneyTree({ journeyHasTree = [] }: IJourney) {
  return (
    <TreeContainer
      role="tree"
      aria-label="tree structure to display journey information"
    >
      {journeyHasTree.map((node) => (
        <StepNode key={node.id} {...node} />
      ))}
    </TreeContainer>
  );
});
