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

{
    // 15) JavaScript Program to Find the Factorial of a Number

    let n = 7;
    let fact = 1;

    for (let i = n; i >= 1; i--) {
        fact = fact * i;
    }
    console.log(fact);
}

{
    //  16) JavaScript Program to Display the Multiplication Table

    let multiply = 5;

    for (let i = 1; i <= 10; i++) {
        console.log(`${multiply} * ${i} = ${multiply * i}`);
    }
}

{
    // 17) JavaScript Program to Print the Fibonacci Sequence

    let n1 = 0;
    let n2 = 1;
    let n3 = 1;
    let i = 1;

    while (i <= 10) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;

        i++;
        console.log(`${n1}`);
    }
}

{
    //  18) JavaScript Program to Check Armstrong Number

    let num = 153;
    let sum = 0;

    let temp = num;

    while (temp > 0) {
        let remainder = temp % 10;
        sum = sum + remainder * remainder * remainder;
        temp = Math.floor(temp / 10);
    }

    if (sum == num) {
        console.log(`${num} is an Armstrong number`);
    } else {
        console.log(`${num} is not an Armstrong number`);
    }
}

{
    // 21) JavaScript Program to Find the Sum of Natural Numbers

    let num = 10;
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }
    console.log(sum);
}

{
    // 22) JavaScript Program to Check if the Numbers Have Same Last Digit

    let num1 = 15, num2 = 253;
    let temp1 = num1;
    let temp2 = num2;
    let r1 = 0, r2 = 0;

    r1 = temp1 % 10;
    r2 = temp2 % 10;

    if (r1 == r2) {
        console.log("Both have same last digit");
    } else {
        console.log("Both not have same last digit");
    }
}

{
    // 32) JavaScript Program to Find ASCII Value of Character

    let str = "JavaScript";
    console.log(str.charCodeAt(2));
}

{
    // 33) JavaScript Program to Check Whether a String is Palindrome or Not

    let str = "ABA";
    let reverseStr = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    }
    
    // if (str === reverseStr) {
    //     console.log("String is Palindrome");
    // } else {
    //     console.log("String is not Palindrome")
    // }

    reverseStr = str.split("").reverse().join("");

    if (str === reverseStr) {
        console.log("String is Palindrome");
    } else {
        console.log("String is not Palindrome")
    }
}

{
    // 34) JavaScript Program to Sort Words in Alphabetical Order

    let str = "This is a JavaScript";
    let strSplit = str.split("");
    let sortedStr = strSplit.sort().join("");

    console.log(sortedStr);
}

{
    // 35) JavaScript Program to Replace Characters of a String

    let str = "This is JavaScript. JavaScript is a scripting language.";
    console.log(str.replaceAll("JavaScript", ".Net"));
}

{
    // 36) JavaScript Program to Reverse a String

    let str = "Reverse";
    console.log(str.split("").reverse().join(""));
}