//function is code of block which can be reused to perform specific task.

// There are 2 type of function

//1.Inbuild - which are already knowns to js
//--- e.g. alert() , prompt() , console.log()

//2.User Defined - it is created by user

function sayHello(){
    console.log("Hello 💖")
}
sayHello();
sayHello();


//function by parameter passing
function sayHii(name){
    console.log("Hello 💖 "+name)
}
sayHii("Sona");
sayHii("Mona");

function addition(x , y){
    console.log("Addition is ", x+y)
}
addition(2 , 5);

function addition(num1 , num2){
    const sum = num1+num2;
    console.log(sum);
}
addition(2 , 5);
addition(23 , 52);

function rectangle(l,b){
    const area = l * b;
    console.log("Area of rectangle is " +area);
}
rectangle(12 , 4)



