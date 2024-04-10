interface Animal {
  name: string;
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

const pochi = new Dog("pochi");
pochi.crying("わん！");
pochi.walking();
