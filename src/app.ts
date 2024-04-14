function mergeObj<T extends object, U extends object>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

const mergedObj = mergeObj({ name: "tom" }, { age: 40 });
console.log(mergedObj);

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let result = "値がありません。";
  if (element.length > 0) {
    result = `値の個数は${element.length}個です。`;
  }
  return [element, result];
}

console.log(countAndDescribe("こんにちは"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({ name: "taro", age: 20 }, "age"));
