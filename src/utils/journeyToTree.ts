import { IStep } from "./types";

/**
 * @description this function gets the journey data, for each element
 * finds the parent and adds the children to the parent children array.
 * @param {IStep[]} journey - journey data that comes from the server
 * @returns {IStep[]} - journey data on a tree from
 * @todo - Move this computation to another thead with a Web Worker if we need to call it with and event to free que queue example implementation ca be found on "../utils/journeyToTreeWorker.ts
 */
export default function journeyToTree(journey: IStep[]): IStep[] {
  //set tree to a new reference in memory to avoid original data mutation
  const tree = journey.map((element: IStep) => ({ ...element }));

  for (const element of tree) {
    element.children = [];

    const childArr = element.path.split(".");
    childArr.pop();
    const child = childArr.join(".");

    const parent = tree.find((parent: IStep) => parent.path === child);
    if (parent) {
      parent.children?.push(element);
    }
  }

  return [tree[0]];
}

/**
 * @description example web worker communication with the worker thead
 * @example
 * const worker = new Worker(
 *   new URL("../utils/journeyToTreeWorker.ts", import.meta.url)
 * );
 * worker.postMessage(journey);
 * worker.onmessage = ({ data }) => {
 *   console.log(data);
 * };
 *
 */
