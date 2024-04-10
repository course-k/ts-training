interface Animal {
  readonly name: string;
  crying(cry: string): void;
}

class Dog implements Animal {
  constructor(public name: string) {}
  crying(cry: string): void {
    console.log(cry);
  }
  walking() {
    console.log("お散歩中です。");
  }
}

let pochi: Animal;
pochi = new Dog("pochi");
pochi.name = "taro";
