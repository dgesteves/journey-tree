export interface IStep {
  id: string;
  stepId: string;
  stepType: string;
  path: string;
  children: IStep[];
}
