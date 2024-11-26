// Number Methods

{
    // Q-1

    let str = "10";
    
    console.log(parseInt(str));
    console.log(parseFloat(str));
    console.log(typeof parseInt(str));
    console.log(typeof parseFloat(str));
}

{
    // Q-2

    let numFix = 56.546546;
    console.log(numFix.toFixed());
    console.log(numFix.toFixed(1));
    console.log(numFix.toFixed(3));
}

{
    // Q-3

    console.log(Number.isFinite(5 + 2310));
    console.log(Number.isFinite(5 / 0));
    console.log(Number.isFinite(0 / 254));
    console.log(Number.isFinite(0 / 0));
}

{
    // Q-4

    let num = 23651.56454;
    console.log(num.toExponential());
    console.log(num.toExponential(1));
    console.log(num.toExponential(2));
}

{
    // Q-5

    let num = 25;
    console.log(typeof num);
    console.log(num.toString());
    console.log(typeof num.toString());
}

{
    // Q-6

    console.log(Math.ceil(5.32));
    console.log(Math.ceil(3.2));
    console.log(Math.ceil(-3.5));
    console.log(Math.ceil(-12.75));
    console.log(Math.ceil(-151.368));
}

{
    // Q-7

    console.log(Math.floor(3.26));
    console.log(Math.floor(12.98));
    console.log(Math.floor(-23.3265));
    console.log(Math.floor(-0.32));
}

{
    // Q-8

    console.log(Number.isNaN(5));
    console.log(Number.isNaN("4"));
}

{
    // Q-10

    const number = 14;
    console.log(number.toString(2));
    console.log(number.toString(8));
    console.log(number.toString(16));
}