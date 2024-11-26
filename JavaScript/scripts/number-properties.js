// JavaScript Number Object Properties

// Number.isFinite()

{
    console.log(Number.isFinite(1 / 0));
    console.log(Number.isFinite(0 / 1));
    console.log(Number.isFinite(5 / 6));
    console.log(Number.isFinite(0 / 0));
    console.log(Number.isFinite(NaN));
}

// Number.isInteger()

{
    console.log("=== isInteger() ===");
    console.log(Number.isInteger(5));
    console.log(Number.isInteger(-5256));
    console.log(Number.isInteger(156.56));
    console.log(Number.isInteger(-1265.25));
}

// Number.isNaN()

{
    console.log("=== isNaN() ===");
    console.log(Number.isNaN(5));
    console.log(Number.isNaN("k" * 5));
}

// Number.parseFloat() 

{
    console.log("=== parseFloat() ===");
    console.log(Number.parseFloat(10));
    console.log(Number.parseFloat(3.25));
}

// Number.parseInt()

{
    console.log("=== parseInt() ===");
    console.log(Number.parseInt(3.25));
    console.log(Number.parseInt(-2513.65));
}

// toExponential()

{
    console.log("=== toExponential() ===");
    let value = 25000;
    console.log(value.toExponential(0));
    console.log(value.toExponential(1));
    console.log(value.toExponential(2));
    console.log(value.toExponential(3));
}

// toFixed()

{
    console.log("=== toFixed() ===");

    let value = 25682.65256;
    console.log(value.toFixed(0));
    console.log(value.toFixed(1));
    console.log(value.toFixed(2));
    console.log(value.toFixed(8));
}

// toPrecision()

{
    console.log("=== toFixed() ===");

    let num = 3221.36528;
    console.log(num.toPrecision());
    console.log(num.toPrecision(1));
    console.log(num.toPrecision(2));
    console.log(num.toPrecision(4));
    console.log(num.toPrecision(5));
}

// toString()

{
    console.log("=== toString() ===");

    let str = 256;
    console.log(typeof str);
    console.log(typeof str.toString());
}

// valueOf()

{
    console.log("=== valueOf ===");
    let num = 256.56;
    let str = "mohan";

    console.log(num.valueOf());
    console.log(str.valueOf());
}  