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
  private static instance: Japanese;

  private constructor(name: string) {
    super(name);
  }

  greeting(this: Person): void {
    console.log(`こんにちは、私は${this.name}です。`);
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new Japanese("Taro");
      return this.instance;
    }
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
const taro = Japanese.getInstance();

const john = new American("John");
john.greeting();
taro.greeting();
