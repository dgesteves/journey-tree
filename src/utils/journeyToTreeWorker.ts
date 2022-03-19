export {};
/**
 * @description example web worker communication with the main thead
 * @example
 * addEventListener("message", ({ data }) => {
 *   //set tree to a new reference in memory to avoid original data mutation
 *   const tree = data.map((element: IStep) => ({ ...element }));
 *
 *   for (const element of tree) {
 *     element.children = [];
 *
 *     const childArr = element.path.split(".");
 *     childArr.pop();
 *     const child = childArr.join(".");
 *
 *     const parent = tree.find((parent: IStep) => parent.path === child);
 *     if (parent) {
 *       parent.children?.push(element);
 *     }
 *   }
 *
 *   postMessage([tree[0]]);
 * });
 *
 */
