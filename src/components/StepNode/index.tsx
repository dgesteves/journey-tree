import { IStep } from "../../utils/types";
import JourneyTree from "../JourneyTree";
import { Step, NodeContainer } from "./styles";
import Line from "../Line";
import { useState } from "react";
import EditStep from "../EditStep";

export default function StepNode({ stepType, children, stepId }: IStep) {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <NodeContainer>
      <Step
        tabIndex={0}
        role="treeitem"
        aria-label="tree node or step in the journey"
      >
        <EditStep
          isEditing={isEditing}
          heading={heading}
          subHeading={subHeading}
          stepId={stepId}
          stepType={stepType}
          setIsEditing={setIsEditing}
          setHeading={setHeading}
          setSubHeading={setSubHeading}
        />
      </Step>
      <Line childrenNumber={children.length} />
      <JourneyTree journeyHasTree={children} />
    </NodeContainer>
  );
}
