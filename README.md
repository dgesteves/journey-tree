# Task for Christian Graf

* Task Started at Sat 18 Mar 2022
* Author: Diogo Esteves

#### Table of Contents

1. [Project Description](#project-description)
2. [Installation Instructions](#installation-instructions)
3. [Test Instructions](#test-instructions)
4. [Architecture](#journey-architecture)

## Application video:

https://user-images.githubusercontent.com/34245953/159127389-58dbb5b2-eea7-4bc0-b82b-0737da889509.mov


## Project Description

### Frontend Challenge

Evaluated on several criteria such as:

- project setup
- choice of tools (where applicable)
- documentation
- coding style
- tests
- sticking to requirements
- UI/UX choices

### Background

The task is to build an interface to display, configure, and save a journey in the browser. The API does not exist, yet,
but the data structure has been defined to be an array of elements with the following type:

```tsx
type JourneyStep = {
  id: string
  stepType: string
  stepId: string
  path: string
}
```

Where:

- `id`: the database primary key of the object (UUID)
- `stepType`: is the type of this step which can take the values `wait`, `email`, `split`, `trigger`. Each value refers
  to a separate type backed by its own database table/API endpoint.
    - `trigger` will be an event that starts the journey. This has to be the first step of a journey (and only the first
      step)
    - `wait` wait a given time until you proceed to the next step
    - `email` send an email
    - `split` will split the journey based on the outcome of a to-be-defined action
- `stepId`: is the ID of that object in the table defined by the `stepType`
- `path`: is the label representing the position of this `JourneyStep` instance in the journey tree. Have a look
  at [https://www.postgresql.org/docs/9.1/ltree.html](https://www.postgresql.org/docs/9.1/ltree.html) for a deeper
  understanding. The example at the bottom of this page should give a good understanding.

### Task 1

Your task is to build a page that takes a tree from an API and renders it on screen. There won’t be any drag’n’drop
functionality for this assignment! We just want an existing tree rendered. The API endpoint currently doesn’t exist, but
assume the following payload:

```tsx
[
  {
    id: "29fbd98b-4dc2-4635-803b-ec3a0b79eb86",
    stepId: "b44febf9-0b3d-4e08-9f90-f74375fb4d48",
    stepType: "trigger",
    path: "A"
  },
  {
    id: "911e5758-4e60-4584-a9ec-d30b505d4591",
    stepId: "a300f9c3-eb25-4d7f-afb3-fb3de9e237b6",
    stepType: "email",
    path: "A.B"
  },
  {
    id: "ab12a55b-4807-4446-b868-05940f68a262",
    stepId: "a6c11875-2346-41f9-be64-d87903a9baf8",
    stepType: "wait",
    path: "A.B.C"
  },
  {
    id: "098a6b6a-940d-4028-8999-6a7bb09c1236",
    stepId: "1f981a54-0a0c-4a0c-8c3d-1646ce63ed35",
    stepType: "split",
    path: "A.B.C.D"
  },
  {
    id: "f5a202b1-16af-4e2c-adce-498b1d8768e7",
    stepId: "19475b3e-63a3-40b2-be19-11ccb2a9f983",
    stepType: "split",
    path: "A.B.C.D.YES"
  },
  {
    id: "5537144e-21c6-4c5f-928c-2e219bc52572",
    stepId: "12a72da0-7a4e-4b3e-a8e6-6364b527f465",
    stepType: "email",
    path: "A.B.C.D.YES.YES"
  },
  {
    id: "96299884-2324-4835-9208-b59661328ea1",
    stepId: "a021a1da-cc84-4d32-aed5-1c8da9cd65d0",
    stepType: "wait",
    path: "A.B.C.D.YES.NO"
  },
  {
    id: "37ec8273-28b9-44ea-857c-c3a36754b777",
    stepId: "97484c86-d52f-429f-8a81-b027f9637b6b",
    stepType: "email",
    path: "A.B.C.D.YES.NO.F"
  },
  {
    id: "b9c461d6-072d-4f2e-9235-ec35f17f45c9",
    stepId: "956e8b07-892b-490a-a33d-b3af3c61f342",
    stepType: "email",
    path: "A.B.C.D.NO"
  },
]
```

- each step should be represented by a box with a headline (you can put in a placeholder text) and a sub-headline (
  again, put in a placeholder)
- each box should be clickable (later in the application this will allow the user to configure each step)
- a “save” button should allow to save the edited journey and send the payload back to the API

Imagine for the sake of this exercise that the hiring of a UX designer is delayed, and thus there is no Figma layout
provided. You can come up with your own design which should fit with our current CI that you can infer
here: [https://www.getcyver.com/](https://www.getcyver.com/). You can choose your own CSS framework for this exercise.
Also imagine the backend developer is still working on the implementation of the API, so you have the API ready when you
start implementing the FE.

### Task 2 (no coding required)

A user who wants to create a new journey should be able to pick from a list of pre-defined journey templates. Once
chosen the application should

1. render the tree on screen
2. allow the user to configure it to their needs
3. allow the user to save the configured journey.

These journey templates should simply be hardcoded in the frontend. For this task please

- decide on the data structure you would use to store those journey templates and give an example
- think of the challenges you would expect to come up when implementing this functionality. List them with a short
  explanation (the details will be discussed in the technical discussion)
- no actual coding required for this task!

## Installation Instructions

### Available Scripts

#### `npm start`

#### `npm run build`

## Test Instructions

* I think that it is sufficient to show tests on one exercise only, should show that I know how to test my
  implementations.

#### `npm test`

## Journey Architectue

![Screenshot 2022-03-19 at 09 56 03](https://user-images.githubusercontent.com/34245953/159127175-f9d73f0e-e583-442c-a3d8-28ab59137010.png)
