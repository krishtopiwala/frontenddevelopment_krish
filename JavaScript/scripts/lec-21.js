{
    // JavaScript Generator Function

    function* generatorFunction() {
        yield 1;
        yield "Hello World";
        yield 3 * 5;
    }

    let gen = generatorFunction();

    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
}

{
    // JavaScript Callback Function

    function sum(a, b) {
        return a + b;
    }

    function display() {
        
    }
}