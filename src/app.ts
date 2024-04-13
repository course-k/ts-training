function mergeObj<T, U>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

const mergedObj = mergeObj({ name: "tom" }, { age: 20 });
console.log(mergedObj);
