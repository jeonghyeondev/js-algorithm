var fs = require('fs');
var input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n');

var number = input[0].split('\n');
var jeomsu = input[1].split(' ').map(Number);
var max = 0;
var sum = 0;
var ave = 0;

for (var i = 0; i < number; i++) {
  if (jeomsu[i] > max) {
    max = jeomsu[i];
  }
}
for (var i = 0; i < number; i++) {
  jeomsu[i] = (jeomsu[i] / max) * 100;
  sum += jeomsu[i];
}

ave = sum / number;
console.log(ave);
