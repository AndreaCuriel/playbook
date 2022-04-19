const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];
//show name for each explorer (forEach)
explorers.forEach((names) => console.log(names.name));

//show stack for each explorer (forEach)
explorers.forEach((stacks) => console.log(stacks.stack));

//create a new stack list for each explorer (map)
const listStack = explorers.map((list) => list.stack);
console.log("NEW STACK LIST");
console.log(listStack);

//create a mew list where it has only js like stack (filter)
const listJsStack = explorers.filter((list) => list.stack.includes("js"));
console.log("FILTER ONLY JS STACK");
console.log(listJsStack);

//first explorer that they are from CDMX with FIND
const firstExplorer = explorers.find((first) => first.city == "CDMX");
console.log("FIRST EXPLORER IS FROM CDMX");
console.log(firstExplorer);

//obtain the sum of the all exercises completed with REDUCE
const sumExercises = explorers.reduce(
  (acc, exe) => acc + exe.exercises_completed,
  0
);
console.log("SUM ALL EXERCISES COMPLETED ");
console.log(sumExercises);
