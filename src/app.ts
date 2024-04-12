interface Birds {
  type: "Birds";
  flyingSpeed: number;
}

interface Horse {
  type: "Horse";
  runningSpeed: number;
}

type Animal = Birds | Horse;

function print(animal: Animal) {
  switch (animal.type) {
    case "Birds":
      animal.flyingSpeed = 100;
      break;
    case "Horse":
      animal.runningSpeed;
  }
}
