{
    function hello() {
        console.log("Hello World");
    }

    hello();
}

function sayHello() {
    return console.log("This is from return");
}

sayHello();

function parameterFunction(num1, num2) {
    return num1 + num2; 
}

let resultSum = parameterFunction(5, 15);
console.log(resultSum);