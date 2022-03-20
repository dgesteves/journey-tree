import { ChangeEvent, useCallback, useState } from "react";

export default function useStepNodeHandler() {
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

  return {
    heading,
    subHeading,
    isEditing,
    editClickHandler,
    saveClickHandler,
    changeHeadingHandler,
    changeSubHeadingHandler,
    setHeading,
    setSubHeading,
    setIsEditing,
  };
}
