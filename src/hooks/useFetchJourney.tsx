import { useEffect, useState } from "react";
import { IStep } from "../utils/types";
import fetchJourney from "../services/journeyApi";
import journeyToTree from "../utils/journeyToTree";

export default function useFetchJourney() {
  const [journey, setJourney] = useState<IStep[]>([]);

  useEffect(() => {
    fetchJourney()
      .then((data) => journeyToTree(data as IStep[]))
      .then((journey) => setJourney(journey));
  }, []);

  return { journey };
}
