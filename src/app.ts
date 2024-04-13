type StrNum = string | number;

function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: number, b: number): number;
function add(a: StrNum, b: StrNum) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

const result1 = add("Hellor ", "world");
const result2 = add("Hellor ", 100);
const result3 = add(200, "world");
const result4 = add(200, 100);
