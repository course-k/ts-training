function Logger(target: Function) {
  console.log("decorator calling...");
  console.log(target);
}

@Logger
class Person {
  constructor(public name: string = "max") {
    console.log("Person creating...");
  }
}

const p = new Person();

console.log(p);
