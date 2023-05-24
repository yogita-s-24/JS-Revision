const number = [9,8,5,7,4,32,11];

const result = number.map((num)=>{
    if(num % 2 == 0){
        return `${num} is even`
    }
    else{
        return `${num} is odd`

    }
})
console.log(result);