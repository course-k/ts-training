class Animal {
  private favorite: string[] = [];
  constructor(
    private readonly animalId: string,
    public type: string,
    public crying: string
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

const dog = new Animal("001", "犬", "わんわん");
dog.greeting();
