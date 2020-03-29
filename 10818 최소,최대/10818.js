var fs = require('fs');
var input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');

var num = input[0].split('\n');
var arr = input[1].split(' ').map(Number);
var max = -1000000;
var min = 1000000;

for (var i = 0; i < num; i++) {
  if (max < arr[i]) {
    max = arr[i];
  } else if (min > arr[i]) {
    min = arr[i];
  }
}
console.log(min + ' ' + max);
