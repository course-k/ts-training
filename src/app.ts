interface Animal {
  name: string;
  crying(cry: string): void;
}

let dog: Animal;
dog = {
  name: "pochi",
  crying(cry: string) {
    console.log(cry);
  },
};

dog.crying("わんわん");

type AnotherAnimal = {
  name: string;
  crying(cry: string): void;
};

let cat: AnotherAnimal;
cat = {
  name: "tama",
  crying(cry: string) {
    console.log(cry);
  },
};
cat.crying("にゃー");
