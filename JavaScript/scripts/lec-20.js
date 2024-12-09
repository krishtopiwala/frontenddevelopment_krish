{
    // JavaScript call()

    // Without use call method

    function sum(a, b) {
        return a + b;
    }

    // console.log(sum(2, 10));
}

{
    // With call method

    function sum(a, b) {
        return a + b;
    }
    let result = sum.call(this, 5, 15);
    console.log(result);
}

{
    let student = {
        stud_name: "Mohan",
        age: 50
    };

    function showStudent() {
        console.log(`Student Name ${this.stud_name} and age is ${this.age}`);
    }

    showStudent.call(student);
}

{
    function setUsername(username) {
        this.username = username;
        console.log("called");
    }

    function createUser(username, email, password) {
        setUsername.call(this, username);

        this.email = email;
        this.password = password;
    }

    const result = new createUser("madhav", "madhav@gmail.com", "123");
    console.log(result);
}

{
    // Function.prototype.apply()

    function largestNumber(a, b, c) {
        if ((a > b) && (a > c)) {
            console.log(`${a} is largest`);
        } else if ((b > a) && (b > c)) {
            console.log(`${b} is largest`);
        } else if ((c > a) && (c > b)) {
            console.log(`${c} is largest`);
        }
    }

    largestNumber(2, 54, 578);
    largestNumber.apply(this, [32, 54, 1]);
}

{
    // Function.prototype.bind()

    let person = {
        first_name: "Manohar",
        last_name: "Sharma",
        display: function() {
            console.log(`First Name ${this.first_name} Last Name ${this.last_name}`);
        }
    };

    let member = {
        first_name: "Mohit",
        last_name: "Kumar",
    };

    let full_name = person.display.bind(member);
    console.log(full_name);
}