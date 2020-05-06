var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var testCase = input[0];
var avg = parseFloat(0);
var num = parseFloat(0);
var arr = [];

for (var i = 1; i <= testCase; i++) {
  arr = input[i].split(' ');
  var sum = parseFloat(0);
  var count = 0;
  for (var j = 1; j <= arr[0]; j++) {
    sum += parseFloat(arr[j]);
  }
  avg = sum / arr[0];

  for (var j = 1; j <= arr[0]; j++) {
    if (avg < arr[j]) {
      count++;
    }
  }
  num = (count / arr[0]) * 100;
  num = num.toFixed(3);
  console.log(num + '%');
}
