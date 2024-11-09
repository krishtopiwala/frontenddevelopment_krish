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

    let number = 35;

    if (number % 5 == 0 && number % 7 == 0) {
        console.log(`${number} is divisible by both 5 and 7`);
    } else if (number % 5 == 0) {
        console.log(`${number} is divisible by 5`);
    } else if (number % 7 == 0) {
        console.log(`${number} is divisible by 7`);
    } else {
        console.log(`${number} is not divisible by 5 and 7`);
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

// switch case statement

let week = "Tuesday";

switch (week) {
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    case "Wednesday":
        console.log("Wednesday");
        break;
    case "Thursday":
        console.log("Thursday");
        break;
    case "Friday":
        console.log("Friday");
        break;
    case "Saturday":
        console.log("Saturday");
        break;
    case "Sunday":
        console.log("Sunday");
        break;
    default:
        console.log("Invalid week day");
}

// practice question

{
    let totalPurchase = 10;
    let premiumMember = true;

    if (totalPurchase >= 100 && premiumMember) {
        console.log("You will get 20% discount");
    } else if (totalPurchase >= 100 && !premiumMember) {
        console.log("You will get 10% discount");
    } else if (totalPurchase < 100 && premiumMember) {
        console.log("You will get 5% discount");
    } else if (totalPurchase < 100 && !premiumMember) {
        console.log("You will get 0% discount");
    }
}

{
    let n1 = prompt("enter any number less than 100 but greater than 0");
    let randomNumber = Math.round((Math.random() * 100) + 1);

    if (n1 === randomNumber) {
        alert("You guess correct number");
    } else {
        alert("Try again");
    }
}