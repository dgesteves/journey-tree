import Main, { Heading } from "./styles";
import { JOURNEY_BUILDER } from "../../constants";
import Description from "../../components/Description";
import JourneyTree from "../../components/JourneyTree";
import useFetchJourney from "../../hooks/useFetchJourney";

export default function JourneyBuilderPage() {
  const { journey } = useFetchJourney();

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
