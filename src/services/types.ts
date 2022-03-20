export interface Step {
  id: string;
  stepType: string;
  stepId: string;
  path: string;
}

export type Journey = Step[];
