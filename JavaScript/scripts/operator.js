// JavaScript Operators

// Arithmetic Operator

{
    var a = 5;
    var b = 5;

    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a % b);
    console.log(a ** b)
}

// Assignment Operator

{
    var x = 5;
    var y = 3;

    console.log(x += y); // x = x + y
    console.log(x -= y); // x = x - y
    console.log(x *= y); // x = x * y
    console.log(x /= y); // x = x / y
    console.log(x %= y); // x = x % y
    console.log(x **= y) // x = x ** y;
}

// Logical Operator

{
    let country = "USA";
    let age = 20;

    if ((country == "India") && (age >= 18)) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote");
    }

    if ((country == "India") || (age >= 18)) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote");
    }

    var x = 15;

    if (!x == 15) {
        console.log("true");
    } else {
        console.log("false");
    }
}

// Relational Operator

{
    let temp1 = 100;
    let temp2 = 500;

    if (temp1 === temp2) {
        console.log("Match elements");
    } else {
        console.log("Match not elements");
    }

    if (temp1 < temp2) {
        console.log("temp1 is less than temp2");
    } else if (temp1 <= temp2) {
        console.log("temp1 is less than or equal to temp2");
    } else if (temp1 > temp2) {
        console.log("temp1 is greater than to temp2");
    }
    else if (temp1 >= temp2) {
        console.log("temp1 is greater than or equal to temp2");
    }
}