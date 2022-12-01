// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
    
    let answer = 0;
    // 가져다 줘야하는 개수 a
    // 보너스 콜라 b
    // 빈병의 개수 n
    while(a<=n){
      answer += Math.floor(n/a) * b
      n = (Math.floor(n/a) * b ) + (n%a)      
    }
    
    return answer
}