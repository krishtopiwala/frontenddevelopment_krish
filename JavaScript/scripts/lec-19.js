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

{
    // Object.defineProperty()
    // Object.defineProperty(obj, prop, descriptor)

    const object1 = {};
    console.log(object1);

    Object.defineProperty(object1, "property1", {
        value: "Kartik",
    });
    console.log(object1);

    object1.property1 = "KL";
    console.log(object1.property1);

    Object.defineProperty(object1, "property2", {
        value: "Kishore",
    });

    console.log(object1);
    console.log(object1.property2);
}

{
    // this keyword

    const person = {
        name: "Mohan",
        age: "40",
        qualification: "B.Com",
        personProfile: function() {
            console.log(`My name is ${this.name} and my qualification is ${this.qualification}`);
        },
    };

    person.personProfile();
}

{
    // Object.entries()

    const person = {
        name: "Mohan",
        age: "40",
        qualification: "B.Com",
    };

    for (let [key, value] of Object.entries(person)) {
        console.log(`${key}: ${value}`);
    }

    console.log(Object.isFrozen(person));
}

{
    // Object.freeze

    const obj = {
        prop: 45,
    };

    console.log(obj.prop);

    Object.freeze(obj);

    obj.prop = 50;
    console.log(obj.prop);

    console.log(Object.isFrozen(obj));
}

{
    // Object.getOwnPropertyNames()
    
    const object1 = {
        a: 1,
        b: 2,
        c: 3,
    };
    
    let array = [4, 5, 6, 7, 8, 9, 10];
    
    console.log(Object.getOwnPropertyNames(object1).concat(array));
    
    // Object.hasOwn()

    console.log(Object.hasOwn(object1, 'c'));
    console.log(Object.hasOwn(object1, 'e'));
}

{
    // Object.setPrototypeOf()

    const obj1 = {};
    const anotherObject = {
        age: 50,
        weight: 65
    };

    console.log(obj1.age);

    Object.setPrototypeOf(obj1, anotherObject);
    console.log(obj1.weight);
}

{
    // Object.values()

    const person = {
        name: "Mohan",
        age: "40",
        qualification: "B.Com",
    }

    console.log(Object.values(person));
}

{
    // Object.is()

    console.log(Object.is(1, 1));
    console.log(Object.is(1, '1'));
    console.log(Object.is(NaN, NaN));
}

{
    // Object.isSealed()

    const obj1 = {
        age: 45,
    };

    console.log(obj1.age);
    Object.seal(obj1);

    obj1.age = 55;
    console.log(obj1.age);

    delete obj1.age;
    console.log(obj1.age);

    console.log(Object.isSealed(obj1));
}

{
    // Object.keys()

    const object1 = {
        name: 'Vinayak',
        age: 42,
        status: true,
      };
      
      console.log(Object.keys(object1));
}