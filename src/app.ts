function Logger(logStr: string) {
  return function (target: any) {
    console.log(target);
    console.log(logStr);
  };
}
function WithTemplate(template: string, hookId: string) {
  return function (target: any) {
    console.log("テンプレート実行中");
    const element = document.getElementById(hookId);
    const t = new target();
    if (element) {
      element.innerHTML = template;
      element.querySelector("h1")!.textContent = t.name;
    }
  };
}
@Logger("ロガー実行中")
@WithTemplate("<h1>Hello world</h1>", "body")
class Person {
  constructor(public name: string = "max") {
    console.log("Person creating...");
  }
}

const p = new Person();

console.log(p);

function PropertyLog(target: any, propertyName: string | Symbol) {
  console.log("Call Property Decolator");
  console.log(target);
  console.log(propertyName);
}

function MethodLog(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Call Method Decolator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function AccesorLog(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Call Accessor Decolator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function ParamLog(target: any, name: string | Symbol, position: number) {
  console.log("Call Param Decolator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @PropertyLog
  title: string;
  private _price: number;
  @AccesorLog
  set price(price: number) {
    if (price > 0) {
      this._price = price;
    } else {
      throw Error("不正な価格です");
    }
  }
  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }
  @MethodLog
  getTaxPrice(@ParamLog tax: number) {
    return this._price * (1 + tax);
  }
}
