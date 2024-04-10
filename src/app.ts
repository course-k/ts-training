class Animal {
  protected favorite: string[] = [];
  get latestAddress() {
    return this.address;
  }
  set latestAddress(address: string) {
    this.address = address;
  }
  constructor(
    private readonly animalId: string,
    public type: string,
    public crying: string,
    private address: string
  ) {}
  greeting(this: Animal) {
    console.log(`${this.crying}! 私は${this.type}です。`);
  }
  addFavorite(this: Animal, fav: string) {
    this.favorite.push(fav);
  }
  printFav(this: Animal) {
    console.log(this.favorite);
  }
}

abstract class Person {
  constructor(public name: string) {}
  abstract greeting(this: Person): void;
}

class Japanese extends Person {
  constructor(name: string) {
    super(name);
  }

  greeting(this: Person): void {
    console.log(`こんにちは、私は${this.name}です。`);
  }
}

class American extends Person {
  constructor(name: string) {
    super(name);
  }

  greeting(this: Person): void {
    console.log(`Hi, I'm ${this.name}.`);
  }
}

const taro = new Japanese("Taro");
taro.greeting();

const john = new American("John");
john.greeting();
