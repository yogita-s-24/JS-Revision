function hello(arr){
    return `${arr} is the capital letter`;
}

const array  = ['A','B','C','D','E'];

const ans = array.map(hello);
console.log(ans)