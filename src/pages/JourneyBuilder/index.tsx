import Main, { Heading } from "./styles";
import { JOURNEY_BUILDER } from "../../constants";
import Description from "../../components/Description";
import { useEffect, useState } from "react";
import fetchJourney from "../../services/journeyApi";
import journeyToTree from "../../utils/journeyToTree";
import { IStep } from "../../utils/types";
import JourneyTree from "../../components/JourneyTree";

export default function JourneyBuilderPage() {
  const [journey, setJourney] = useState<IStep[]>([]);

  useEffect(() => {
    fetchJourney()
      .then((data) => journeyToTree(data as IStep[]))
      .then((journey) => setJourney(journey));
  }, []);

  return (
    <Main>
      <Heading tabIndex={0} role="heading" aria-label="page main heading">
        {JOURNEY_BUILDER}
      </Heading>
      <Description />
      <JourneyTree journeyHasTree={journey} />
    </Main>
  );
}
