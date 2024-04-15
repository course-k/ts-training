function WithTemplate(template: string, hookId: string) {
  return function (target: any) {
    const element = document.getElementById(hookId);
    const t = new target();
    if (element) {
      element.innerHTML = template;
      element.querySelector("h1")!.textContent = t.name;
    }
  };
}
@WithTemplate("<h1>Hello world</h1>", "body")
class Person {
  constructor(public name: string = "max") {
    console.log("Person creating...");
  }
}

const p = new Person();

console.log(p);
