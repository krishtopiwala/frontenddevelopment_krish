{
    // 1) JavaScript Program To Print Hello World

    console.log("Hello World");
}

{
    // 2) JavaScript Program to Add Two Numbers

    let num1 = 15;
    let num2 = 20;
    console.log(`Addition of two numbers: ${num1 + num2}`);
}

{
    // 3) JavaScript Program to Find the Square Root

    console.log(Math.sqrt(9));
}

{
    // 4) JavaScript Program to Calculate the Area of a Triangle

    let base = 15;
    let height = 30;

    console.log(`Area of Triangle ${0.5 * base * height}`);
}

{
    // 5) JavaScript Program to Swap Two Variables

    let a = 5;
    let b = 7;

    let c = a;
    a = b;
    b = c;

    console.log(a);
    console.log(b);

    // without third variable

    let num1 = 10;
    let num2 = 20;
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;

    console.log("Number 1: ", num1);
    console.log("Number 2: ", num2);
}

{
    // 6) JavaScript Program to Solve Quadratic Equation

}

{
    // 7) JavaScript Program to Convert Kilometres to Miles

    const miles = 0.62137119;
    let kilometers = 15;

    console.log(kilometers * miles);
}

{
    // 8) Javascript Program to Convert Celsius to Fahrenheit

    let celsius = 36;

    let fahrenheit = ((celsius * 9) / 5) + 32;
    console.log(fahrenheit);
}

{
    // 9) Javascript Program to Generate a Random Number

    let randomNum = Math.round(Math.random() * 100 + 1);
    console.log(randomNum);
}

{
    // 10) Javascript Program to Check if a number is Positive, Negative, or Zero


    let num = 0;

    if (num > 0) {
        console.log(`${num} is positive`);
    } else if (num < 0) {
        console.log(`${num} is negative`);
    } else {
        console.log(`${num} is zero`);
    }
}

{
    // 11) Javascript Program to Check if a Number is Odd or Even

    let num = 15;

    if (num % 2 == 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}

{
    // 12) JavaScript Program to Find the Largest Among Three Numbers

    let num1 = 266;
    let num2 = 10;
    let num3 = 25;

    if ((num1 > num2) && (num1 > num3)) {
        console.log("Nunber 1 is largest among three numbers")
    } else if ((num2 > num1) && (num2 > num3)) {
        console.log("Number 2 is largest");
    } else if ((num3 > num1) && (num3 > num2)) {
        console.log("Number 3 is largest among three numbers");
    } else {
        console.log("Invalid");
    }
}

{
    // 13) JavaScript Program to Check Prime Number

    let num = 5;

    if ((num % 1 == 0) && (num % num == 0)) {
        console.log("Prime Number");
    }
}