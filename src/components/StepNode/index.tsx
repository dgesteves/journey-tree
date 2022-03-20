import { IStep } from "../../utils/types";
import JourneyTree from "../JourneyTree";
import { Step, NodeContainer } from "./styles";
import Line from "../Line";
import { ChangeEvent, memo, useCallback, useMemo, useState } from "react";
import EditStepMode from "../EditStepMode";
import DisplayStepMode from "../DisplayStepMode";

export default memo(function StepNode({ stepType, children, stepId }: IStep) {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const editClickHandler = useCallback(() => {
    setIsEditing(true);
  }, []);

  const saveClickHandler = useCallback(() => {
    setIsEditing(false);
  }, []);

  const changeHeadingHandler = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setHeading(evt.target.value);
    },
    []
  );

  const changeSubHeadingHandler = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setSubHeading(evt.target.value);
    },
    []
  );

  const renderEditMode = useMemo(() => {
    return (
      <EditStepMode
        subHeading={subHeading}
        heading={heading}
        stepId={stepId}
        changeHeadingHandler={changeHeadingHandler}
        changeSubHeadingHandler={changeSubHeadingHandler}
        clickHandler={saveClickHandler}
      />
    );
  }, [
    changeHeadingHandler,
    changeSubHeadingHandler,
    heading,
    saveClickHandler,
    stepId,
    subHeading,
  ]);

  const renderDisplayMode = useMemo(() => {
    return (
      <DisplayStepMode
        clickHandler={editClickHandler}
        stepType={stepType}
        subHeading={subHeading}
        heading={heading}
      />
    );
  }, [editClickHandler, heading, stepType, subHeading]);

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
