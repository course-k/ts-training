"use strict";
class Animal {
    constructor(animalId, type, crying) {
        this.animalId = animalId;
        this.type = type;
        this.crying = crying;
        this.favorite = [];
    }
    greeting() {
        console.log(`${this.crying}! 私は${this.type}です。`);
    }
    addFavorite(fav) {
        this.favorite.push(fav);
    }
    printFav() {
        console.log(this.favorite);
    }
}
const dog = new Animal("001", "犬", "わんわん");
dog.greeting();
