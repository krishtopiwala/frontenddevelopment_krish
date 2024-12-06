{
    let p = document.getElementById('demo').innerHTML = "This paragraph";
    console.log(p);

    let p2 = document.getElementById('demo').style.backgroundColor = "red";
    console.log(p2);
}

{
    let headings = document.getElementsByClassName('heading');
    console.log(headings);
}

{
    let btn = document.getElementsByTagName('button');
    console.log(btn);
}

{
    function changeText() {
        document.getElementById("demo").innerText = "This is on click event";
    }
}

{
    // Arrow Functions

    const sayHello = () => {
        console.log("Hello World");
    };
    sayHello();

    const returnStatement = () => {
        return "Hello";
    };
    let a = returnStatement();
    console.log(a);


    const sum = (a, b) => {
        return a + b;
    };

    let addition = sum(5, 15);
    console.log(addition);
}
