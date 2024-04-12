type Admin = {
  name: string;
  privilege: string[];
};

type Normal = {
  name: string;
  department: string;
};

type UnionType = Admin & Normal;

let ut: UnionType;
ut = {
  name: "Taro",
  privilege: ["Editor"],
  department: "Sales",
};

console.log(ut);

type NumStr = number | string;
type BoolStr = boolean | string;
type CombinedType = NumStr & BoolStr;

let ct: CombinedType;
ct = "hoge";
console.log(ct);

interface AdminIf {
  name: string;
  pirivlege: string[];
}

interface NormalIf {
  name: string;
  department: string;
}

type UnionTypeIf = Admin & Normal;

let utIf: UnionTypeIf;
ut = {
  name: "Taro",
  privilege: ["Editor"],
  department: "Sales",
};

interface UnionIf extends Admin, Normal {}

let uIf: UnionIf;
uIf = {
  name: "hoge",
  privilege: ["Editor"],
  department: "Sales",
};
