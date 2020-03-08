# JavaScript로 푸는 Algorithm
자바스크립트로 진행하는 Algorithm 저장소 입니다.

### 언어 `node.js`
- 실행: node Main.js
- 버전: v10.16.0
- 시간 제한: ×3+2초
- 메모리 제한: ×2MB
- `1000번 예제 소스`

```javascript
var fs = require("fs");
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);
```

### LINK
백준 : <https://www.acmicpc.net/>
프로그래머스 : <https://programmers.co.kr/learn/challenges?tab=all_challenges>
