var fs = require("fs");
var input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n");

var testCase = input[0];
for (var i = 0; i < testCase; i++) {
    var string = "";
    for (var j = 0; j <= i; j++) {
        string = string + "*";
    }
    console.log(string);
}