// https://school.programmers.co.kr/learn/courses/30/lessons/134240
function solution(food) {

    let result = [0];
    
    for(let i =food.length-1; i>0 ; i--){
        let 음식개수 = 0;
        
        if(food[i] % 2 !== 0){
            음식개수 = (food[i]-1) / 2
        }
        else if(food[i] % 2 === 0) 음식개수 = food[i] / 2
        
        for(let j = 0; j<음식개수; j++){
            result.unshift(i)
            result.push(i)
        }
        
    }

    return  result.join('')
}