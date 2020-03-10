var fs = require("fs");
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("");
var num = input[0];
for (var i = 1; i <= 9; i++) {
  var sum = num * i;
  console.log(num + " * " + i + " = " + sum);
}
