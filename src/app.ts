type Admin = {
  name: string;
  privilege: string[];
};

type Normal = {
  name: string;
  department: string;
};

type UnionType = Admin | Normal;

const printInfo = (ut: UnionType) => {
  if ("privilege" in ut) {
    console.log(ut.privilege);
  }
};

type NumStr = number | string;
const add = (a: NumStr, b: NumStr) => {
  if (typeof a === "number" || typeof b === "number") {
    return a.toString() + b.toString();
  }
  return a + b;
};

class Animals {
  crying() {
    console.log("鳴き声");
  }
}

class Birds extends Animals {
  flying() {
    console.log("飛んでる");
  }
}

type UnionClass = Animals | Birds;

const printBirds = (uc: UnionClass) => {
  if (uc instanceof Birds) {
    uc.crying();
  }
};
