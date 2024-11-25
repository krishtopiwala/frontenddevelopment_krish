// Math Object Properties

{
    let math1 = Math.PI;
    console.log(`PI value ${math1}`);

    let math2 = Math.abs(5);
    math2 = Math.abs(-25);
    console.log(math2);

    let math3 = Math.ceil(6.9);
    console.log(math3);
    console.log(Math.ceil(-6.85));

    let math4 = Math.floor(5.01);
    console.log(math4);
    console.log(Math.floor(-3.2252));
    console.log(Math.floor(-6.95));

    // Math.round

    let math5 = Math.round(6.385);
    console.log(math5);

    // Math.random

    let math6 = Math.round((Math.random() * 100) + 1);
    console.log(math6);

    // Math.pow

    let math7 = Math.pow(6, 3);
    console.log(math7);

    // Math.sqrt

    let math8 = Math.sqrt(25);
    console.log(math8);

    // Math.max

    let math9 = Math.max(256, 45, 5486, 5);
    console.log(math9);

    // Math.min

    let math10 = Math.min(256, 45, 5486, 5, -6);
    console.log(math10);
}