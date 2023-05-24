const number = [1 ,2 ,3 , 5,4,6];

const result = number.map((num)=>{
    if(num %2==0){
        return `${num} is even.`
    }
    else{
        return `${num} is odd.`
    }
})

console.log(result);