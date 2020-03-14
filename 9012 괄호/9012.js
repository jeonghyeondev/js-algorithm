var fs = require('fs');
var input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .match(/[^\r\n]+/g)
  .slice(0);
var num = input[0];
for (var i = 1; i <= num; i++) {
  var arr = input[i].split('');
  var cnt = 0;
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] == '(') {
      cnt++;
    } else if (arr[j] == ')') {
      cnt--;
      if (cnt < 0) {
        break;
      }
    }
  }
  if (cnt == 0) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}
