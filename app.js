function fn(num1, num2, cb) {
    var result = num1 + num2;
    return cb(result);
}
console.log(fn(1, 3, function (result) { return result; }));
