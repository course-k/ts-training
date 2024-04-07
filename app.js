var person = {
    name: "Taro",
    age: 29,
    hobbies: ["soccer", "playing piano"],
    data: [1000, "admin"],
};
var Status;
(function (Status) {
    Status[Status["START"] = 0] = "START";
    Status[Status["STOP"] = 1] = "STOP";
})(Status || (Status = {}));
person.data.push("hoge");
console.log(person);
