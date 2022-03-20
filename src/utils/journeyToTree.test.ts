import journeyToTree from "./journeyToTree";
import { IStep } from "./types";

describe("journeyToTree function", () => {
  const mockJourney = [
    {
      id: "29fbd98b-4dc2-4635-803b-ec3a0b79eb86",
      stepId: "b44febf9-0b3d-4e08-9f90-f74375fb4d48",
      stepType: "trigger",
      path: "A",
    },
    {
      id: "911e5758-4e60-4584-a9ec-d30b505d4591",
      stepId: "a300f9c3-eb25-4d7f-afb3-fb3de9e237b6",
      stepType: "wait",
      path: "A.B",
    },
    {
      id: "ab12a55b-4807-4446-b868-05940f68a262",
      stepId: "a6c11875-2346-41f9-be64-d87903a9baf8",
      stepType: "split",
      path: "A.B.C",
    },
    {
      id: "5537144e-21c6-4c5f-928c-2e219bc52572",
      stepId: "12a72da0-7a4e-4b3e-a8e6-6364b527f465",
      stepType: "wait",
      path: "A.B.C.YES",
    },
    {
      id: "b9c461d6-072d-4f2e-9235-ec35f17f45c9",
      stepId: "956e8b07-892b-490a-a33d-b3af3c61f342",
      stepType: "email",
      path: "A.B.C.NO",
    },
  ];
  const expectedOutput = [
    {
      id: "29fbd98b-4dc2-4635-803b-ec3a0b79eb86",
      stepId: "b44febf9-0b3d-4e08-9f90-f74375fb4d48",
      stepType: "trigger",
      path: "A",
      children: [
        {
          id: "911e5758-4e60-4584-a9ec-d30b505d4591",
          stepId: "a300f9c3-eb25-4d7f-afb3-fb3de9e237b6",
          stepType: "wait",
          path: "A.B",
          children: [
            {
              id: "ab12a55b-4807-4446-b868-05940f68a262",
              stepId: "a6c11875-2346-41f9-be64-d87903a9baf8",
              stepType: "split",
              path: "A.B.C",
              children: [
                {
                  id: "5537144e-21c6-4c5f-928c-2e219bc52572",
                  stepId: "12a72da0-7a4e-4b3e-a8e6-6364b527f465",
                  stepType: "wait",
                  path: "A.B.C.YES",
                  children: [],
                },
                {
                  id: "b9c461d6-072d-4f2e-9235-ec35f17f45c9",
                  stepId: "956e8b07-892b-490a-a33d-b3af3c61f342",
                  stepType: "email",
                  path: "A.B.C.NO",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  test("journeyToTree should return a tree of any data of type IStep[]", () => {
    expect(journeyToTree(mockJourney as IStep[])).toEqual(expectedOutput);
  });
});
