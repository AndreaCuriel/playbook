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
//1.- show name for each explorer (forEach)
explorers.forEach((names) => console.log(names.name));

//2.- show stack for each explorer (forEach)
explorers.forEach((stacks) => console.log(stacks.stack));

//3.- create a new stack list for each explorer (map)
const listStack = explorers.map((list) => list.stack);
console.log("NEW STACK LIST");
console.log(listStack);

//4.- create a mew list where it has only js like stack (filter)
const listJsStack = explorers.filter((list) => list.stack.includes("js"));
console.log("FILTER ONLY JS STACK");
console.log(listJsStack);

//5.- first explorer that they are from CDMX with FIND
const firstExplorer = explorers.find((first) => first.city === "CDMX");
console.log("FIRST EXPLORER IS FROM CDMX");
console.log(firstExplorer);

//6.- obtain the sum of the all exercises completed with REDUCE
const sumExercises = explorers.reduce(
  (acc, exe) => acc + exe.exercises_completed,
  0
);
console.log("SUM ALL EXERCISES COMPLETED ");
console.log(sumExercises);

//7.- VALIDATE IF SOME EXPLORER HAS exercisesFinished IN frontend LIKE true (USE some)
const someExplorer = explorers.some(
  (finish) => finish.missions.frontend.exercisesFinished === true
);
console.log("SOME EXPLORER HAS EXERCISES FINISHED IN FRONTEDN MISSION");
console.log(someExplorer);

//8.- If all explorers have in isFinished of onboarding like true. (every)
const onbordingFinished = explorers.every(
  (onbo) => onbo.missions.onboarding.isFinished === true
);
console.log("ALL EXPLORERS HAVE DONE THE ONBOARDING");
console.log(onbordingFinished);
