function sayHello(frnd){
    return `Hello my friend ${frnd}`
}

const friends = ["Sona" , "Mona" , "Rina"];

const result = friends.map(sayHello);
console.log(result);