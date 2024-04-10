interface Animal extends Play {
  readonly name: string;
  crying(cry: string): void;
}

interface Play {
  playing(): string;
}

class Dog implements Animal {
  constructor(public name: string) {}
  crying(cry: string): void {
    console.log(cry);
  }
  playing(): string {
    return "お散歩";
  }
}

let pochi: Animal;
pochi = new Dog("pochi");
console.log(pochi.playing());
