interface ValidatorConfig {
  [prop: string]: {
    [validatableProp: string]: string[];
  };
}
const registeredValidators: ValidatorConfig = {};

function Required(target: any, name: string) {
  registeredValidators[target.constructor.name] = {
    [name]: ["required"],
  };
}

function PositiveNumber(target: any, name: string) {
  registeredValidators[target.constructor.name] = {
    [name]: ["positive"],
  };
}

function Validate(obj:any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if(!objValidatorConfig){
    return true
  }

  for (const validator in Object.values(objValidatorConfig) ){
    switch(validator) {
      case
    }
  }
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  @Required
  price: number;
  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const form = document.querySelector("form")!;
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const titleEl = form.querySelector("#title") as HTMLInputElement;
  const priceEl = form.querySelector("#price") as HTMLInputElement;
  const course = new Course(titleEl.value, +priceEl.value);
  console.log(course);
});
