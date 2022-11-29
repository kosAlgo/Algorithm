// https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  let count = 0;
  let orderarr = order
    .toString()
    .split("")
    .map((v) => +v);
  for (let item of orderarr) {
    if (item === 3 || item === 6 || item === 9) count++;
  }
  return count;
}
