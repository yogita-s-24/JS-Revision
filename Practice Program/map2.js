function sayGoodbye(bye){
    return `${bye} see you soon`;
}

const friend = ["xyz" , "abc" , "pqr"];

const ans = friend.map(sayGoodbye);

console.log(ans);