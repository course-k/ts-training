function fn(num1: number, num2: number, cb: (num: number) => void) {
  const result = num1 + num2;
  return cb(result);
}

console.log(fn(1, 3, (result) => result));
