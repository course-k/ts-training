interface Animal {
  readonly name: string;
  house?: string;
  crying(cry: string): void;
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
