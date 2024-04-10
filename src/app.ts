type fn = (s: string) => void;
let greeting: fn;
greeting = (name: string) => {
  console.log(`Hi, ${name}`);
};
greeting("John");

interface anotherFn {
  (s: string): void;
}
let anotherGreeting: anotherFn;
anotherGreeting = (name: string) => {
  console.log(`Hello, ${name}`);
};

anotherGreeting("Kevin");
