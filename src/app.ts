const Autobind = (
  _target: any,
  _propName: string,
  descriptor: PropertyDescriptor
) => {
  const orgMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = orgMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
};

class ProjectInput {
  templalteEl: HTMLTemplateElement;
  hostEl: HTMLDivElement;
  formEl: HTMLFormElement;

  titleEl: HTMLInputElement;
  descEl: HTMLInputElement;
  manDayEl: HTMLInputElement;

  constructor() {
    this.templalteEl = document.querySelector("#project-input")!;
    this.hostEl = document.querySelector("#app")!;
    const importedNode = document.importNode(this.templalteEl.content, true);
    this.formEl = importedNode.firstElementChild as HTMLFormElement;
    this.formEl.id = "user-input";

    this.titleEl = this.formEl.querySelector("#title") as HTMLInputElement;
    this.descEl = this.formEl.querySelector("#description") as HTMLInputElement;
    this.manDayEl = this.formEl.querySelector("#manday") as HTMLInputElement;

    this.addEvent();
    this.attach();
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleEl.value);
  }

  private addEvent() {
    this.formEl.addEventListener("submit", this.submitHandler);
  }

  private attach() {
    this.hostEl.insertAdjacentElement("afterbegin", this.formEl);
  }
}

const pjInput = new ProjectInput();
