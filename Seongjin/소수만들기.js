function solution(nums) {
   
    // 1. 서로 다른 3개를 뽑아 소수를 만든다.
    // 2. 소수가 되는 경우의 개수를 리턴
    
    let result=0;
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let t=j+1; t<nums.length; t++){
                let num= nums[i]+nums[j]+nums[t];
                    if(소수판별(num)) result++
                }
            }
        }
       
    
    function 소수판별(num){
        for(i=2; i<= Math.sqrt(num); i++){
            if( (num % i) === 0 ) return false
            
        }
        return true;
    }
    
    return result
};
