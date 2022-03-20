import Text from "./styles";
import { JOURNEY_BUILDER } from "../../constants";
import { memo } from "react";

export default memo(function Description() {
  return (
    <Text tabIndex={0} aria-label="Lorem ipsum text as placeholder">
      Lorem ipsum dolor sit amet, <span>{JOURNEY_BUILDER}</span> consectetur
      adipisicing elit. Amet consequuntur cum debitis dignissimos ducimus minima
      obcaecati praesentium, reiciendis <span>{JOURNEY_BUILDER}</span> saepe
      veritatis voluptas voluptatibus? Blanditiis ipsam iste magnam neque nulla
      totam!
    </Text>
  );
});
