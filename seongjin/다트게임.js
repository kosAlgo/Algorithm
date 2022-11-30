//https://school.programmers.co.kr/learn/courses/30/lessons/17682
// 프로그래머스 lv1 카카오 블라인드 문제

function solution(dartResult) {

    let result = [];
        
    let Re = dartResult.match(/\d{1,2}[SDT][*#]?/g )
        console.log('re',Re)
        Re.map((v,i) => {
            
                let num = v.match(/\d{1,2}/g)
                let Bonus = v.match(/[SDT]/g)
                let option = v.match(/[*#]/g)
                
                if(Bonus[0] === 'S') {
                    num = num[0] * 1
                }
                else if(Bonus[0] === 'D'){
                    num = num[0] ** 2
                }
                else if(Bonus[0] === 'T'){
                    num = num[0] ** 3
                }
            
                if(option !== null && option[0] === '*'){
                       num = num * 2
                        if(i !== 0){
                            result[i-1] = result[i-1] * 2
                        }
                    
                }
                else if(option !== null && option[0] === '#'){
                    num =  -num 
                }
                
                result.push(num)
            
        })
                  
        
        return result.reduce((a,b) => a+b,0)
    }