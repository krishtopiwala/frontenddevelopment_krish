// JavaScript IIFE

{
    (function Profile() {
        return console.log("Hello from IIFE Function");
    })();
}

{
    (function iife(name) {
        console.log(`Hello ${name}`);
    })("Smit");
}

// JavaScript Objects

{
    let profile = {
        fName: "Smit",
        gender: "Male",
        age: 35
    };

    console.log(profile);
    console.log(profile.age);

    let std = {
        course: "Full Stack",
        fees: 75000
    };

    console.log(std);

    // Object.assign()

    let assignObj = Object.assign(profile, std);
    console.log(assignObj);
}

{
    // Object.create()

    let profile = {
        name: "Khush",
        age: 22,
        email: "khush@gmail.com"
    };

    let newObj = Object.create(profile);

    
    newObj.name = "Deep";
    
    console.log(profile);
    console.log(newObj);
}

{
    // Object.defineProperties()

    const person = {
        firstName: "Smit",
        age: 25
    };

    console.log(person);

    Object.defineProperties(person, {
        language: {value: "english"},
    });

    console.log(person);
}