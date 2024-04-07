const person: {
  name: string;
  age: number;
  hobbies: string[];
  data: [number, string];
} = {
  name: "Taro",
  age: 29,
  hobbies: ["soccer", "playing piano"],
  data: [1000, "admin"],
};

enum Status {
  START,
  STOP,
}
person.data.push("hoge");
console.log(person);
