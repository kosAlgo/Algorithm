// 프로그래머스 lv.0 배열회전시키기
// https://school.programmers.co.kr/learn/courses/30/lessons/120844

function solution(numbers, direction) {
    let empty = 0;
    if(direction[0] === 'r') {
        empty = numbers.pop();
        numbers.unshift(empty);
        return numbers
    } else if (direction[0] === 'l') {
        empty = numbers.shift();
        numbers.push(empty);
        return numbers
    }
}