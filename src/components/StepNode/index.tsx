import { IStep } from "../../utils/types";
import JourneyTree from "../JourneyTree";
import { Step, NodeContainer } from "./styles";
import Line from "../Line";
import { memo, useMemo } from "react";
import EditStepMode from "../EditStepMode";
import DisplayStepMode from "../DisplayStepMode";
import useStepNodeHandler from "../../hooks/useStepNodeHandler";

export default memo(function StepNode({ stepType, children, stepId }: IStep) {
  const {
    heading,
    subHeading,
    isEditing,
    editClickHandler,
    saveClickHandler,
    changeHeadingHandler,
    changeSubHeadingHandler,
  } = useStepNodeHandler();

  const renderEditMode = useMemo(
    () => (
      <EditStepMode
        subHeading={subHeading}
        heading={heading}
        stepId={stepId}
        changeHeadingHandler={changeHeadingHandler}
        changeSubHeadingHandler={changeSubHeadingHandler}
        clickHandler={saveClickHandler}
      />
    ),
    [
      changeHeadingHandler,
      changeSubHeadingHandler,
      heading,
      saveClickHandler,
      stepId,
      subHeading,
    ]
  );

  const renderDisplayMode = useMemo(
    () => (
      <DisplayStepMode
        clickHandler={editClickHandler}
        stepType={stepType}
        subHeading={subHeading}
        heading={heading}
      />
    ),
    [editClickHandler, heading, stepType, subHeading]
  );

  return (
    <NodeContainer>
      <Step
        tabIndex={0}
        role="treeitem"
        aria-label="tree node or step in the journey"
      >
        {isEditing ? renderEditMode : renderDisplayMode}
      </Step>
      <Line childrenNumber={children.length} />
      <JourneyTree journeyHasTree={children} />
    </NodeContainer>
  );
});
