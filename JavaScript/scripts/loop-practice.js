// For Loop

{
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

// While Loop

{
    let i = 20;
    while (i > 0) {
        console.log(i);
        i--;
    }
}

// Do While Loop

{
    let i = 5;
    do {
        console.log(`do while i ${i}`);
        i++;
    } while (i < 8);
}

// For of Loop

{
    let arr = [10, 50, 30, 560];
    let i = 0;
    for (let a of arr) {
        console.log(`Array[${i}]: ${a}`);
        i++;
    }    
}

// For in Loop

{
    const myObj = {"name": "Akash", "age": 10, "nationality": "India"};
    // console.log(myObj.nationality);
    // console.log(myObj["age"]);
    
    for (let obj in myObj) {
        console.log(`Keys: ${obj} : Value: ${myObj[obj]}`);
    }
}

// Nested For Loop

{
    for (let i = 1; i <= 5; i++) {
        // console.log(`Main Loop: ${i}`);
        for (let j = 1; j <= 10; j++) {
            // console.log(`Nested Loop: ${j}`);
        }
    }
}

// Break Statement

{
    for (let i = 1; i <= 5; i++) {
        // console.log(`Main Loop: ${i}`);
        for (let j = 1; j <= 5; j++) {
            if (j == 3) {
                break;
            }
            // console.log(`Nested Loop: ${j}`);
        }
    }
}

// Continue Statement

{
    for (let i = 1; i <= 5; i++) {
        console.log(`Main Loop: ${i}`);
        for (let j = 1; j <= 5; j++) {
            if (j == 3) {
                continue;
            }
            console.log(`Nested Loop: ${j}`);
        }
    }
}