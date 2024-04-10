"use strict";
class Animal {
    get latestAddress() {
        return this.address;
    }
    set latestAddress(address) {
        this.address = address;
    }
    constructor(animalId, type, crying, address) {
        this.animalId = animalId;
        this.type = type;
        this.crying = crying;
        this.address = address;
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
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Japanese extends Person {
    constructor(name) {
        super(name);
    }
    greeting() {
        console.log(`こんにちは、私は${this.name}です。`);
    }
}
class American extends Person {
    constructor(name) {
        super(name);
    }
    greeting() {
        console.log(`Hi, I'm ${this.name}.`);
    }
}
const taro = new Japanese("Taro");
taro.greeting();
const john = new American("John");
john.greeting();
