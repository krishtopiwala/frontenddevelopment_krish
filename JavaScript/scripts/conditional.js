// Javascript conditional statement

// if statement

{
    let age = 38;

    if (age >= 18) {
        console.log("You can vote");
    }
}

// if else statement

{
    var a = 5;
    var b = 15;

    if (a > b) {
        console.log("a is greater than b");
    } else {
        console.log("b is greater than or equal to a");
    }
}

// ladder if else statement

{
    let percentage = 54;

    if (percentage > 90 && percentage <= 99) {
        console.log("Grade A+");
    } else if (percentage > 80 && percentage <= 90) {
        console.log("Grade A");
    } else if (percentage > 70 && percentage <= 80) {
        console.log("Grade B");
    } else if (percentage > 60 && percentage <= 70) {
        console.log("Grade C");
    } else if (percentage > 50 && percentage <= 60) {
        console.log("Grade D");
    } else if (percentage > 40 && percentage <= 50) {
        console.log("Grade E");
    } else if (percentage > 0 && percentage <= 40) {
        console.log("Grade F");
    } else {
        console.log("Invalid grade");
    }
}

// nested if statement

{
    let country = "India";
    let yourAge = 25;

    if (country === "India") {
        if (yourAge > 16 && yourAge <= 18) {
            console.log("You are eligible for learning driving licence");
        } else if (yourAge > 18) {
            console.log("You are eligible driving licence");
        }
        else {
            console.log("You are not eligible for driving licence");
        }
    } else {
        console.log("You are not Indian");
    }
}