interface baseValidatable {
  propName: string;
}

interface strValidatable extends baseValidatable {
  value: string;
  maxLength?: number;
  minLength?: number;
}

interface numValidatable extends baseValidatable {
  value: number;
  max?: number;
  min?: number;
}

interface validateResult {
  result: boolean;
  message: string;
}

const isValidStr = (validatable: strValidatable): validateResult => {
  const propName = validatable.propName;
  const value = validatable.value;
  const maxLength = validatable.maxLength;
  const minLength = validatable.minLength;

  if (maxLength && value.trim().length > maxLength) {
    return {
      result: false,
      message: `${propName}は${maxLength}文字以内で入力してください。`,
    };
  }
  if (minLength && value.trim().length < minLength) {
    return {
      result: false,
      message: `${propName}は${minLength}文字以上で入力してください。`,
    };
  }

  return { result: true, message: "" };
};
const isValidNum = (validatable: numValidatable): validateResult => {
  const propName = validatable.propName;
  const value = validatable.value;
  const max = validatable.max;
  const min = validatable.min;

  if (max && value > max) {
    return {
      result: false,
      message: `${propName}は${max}以下で入力してください。`,
    };
  }
  if (min && value < min) {
    return {
      result: false,
      message: `${propName}は${min}以上で入力してください。`,
    };
  }

  return { result: true, message: "" };
};

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

  /**
   * プロジェクト追加処理
   * @param event イベント
   */
  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleEl.value);
    const userInput = this.gatherInput();
    this.clearInput();
    if (Array.isArray(userInput)) {
      const [title, desc, manday] = userInput;
      console.log(title, desc, manday);
    }
  }

  /**
   * フォームのsubmitにプロジェクト追加処理を紐づけ
   */
  private addEvent() {
    this.formEl.addEventListener("submit", this.submitHandler);
  }

  /**
   * templateから作成したフォーム要素を追加
   */
  private attach() {
    this.hostEl.insertAdjacentElement("afterbegin", this.formEl);
  }

  /**
   * 入力値の取得
   * @returns 入力値の配列
   */
  private gatherInput(): [string, string, number] | void {
    const title = this.titleEl.value;
    const desc = this.descEl.value;
    const manDay = parseFloat(this.manDayEl.value);

    const titleValidate = isValidStr({
      propName: this.titleEl.name,
      value: title,
    });
    const descValidate = isValidStr({
      propName: this.descEl.name,
      value: desc,
    });
    const manDayValidate = isValidNum({
      propName: this.descEl.name,
      value: manDay,
    });
    if (!titleValidate.result) {
      alert(titleValidate.message);
      return;
    }
    if (!descValidate.result) {
      alert(descValidate.message);
      return;
    }
    if (!manDayValidate.result) {
      alert(manDayValidate.message);
      return;
    }
    return [title, desc, manDay];
  }

  /**
   * 入力値のクリア
   */
  private clearInput() {
    this.titleEl.value = "";
    this.descEl.value = "";
    this.manDayEl.value = "";
  }
}

const pjInput = new ProjectInput();
