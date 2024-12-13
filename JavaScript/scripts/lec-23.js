// JavaScript Promise

let marks = 35;

let promise = new Promise(function(resolve, rejected) {
    if (marks > 90 && marks < 99) {
        setTimeout(() => {
            resolve("Dad will gift laptop");
        }, 3000);
    } else if (marks > 70 && marks < 90) {
        setTimeout(() => {
            resolve("Dad will gift cricket kit")
        }, 3000);
    } else if (marks > 50 && marks < 70) {
        setTimeout(() => {
            resolve("Dad will gift mobile");
        }, 3000);
    } else {
        setTimeout(() => {
            rejected("Dad will not gift anything");
        }, 3000);
    }
}) 
.then((result) => {
    console.log(result);
})
.then(() => {
    console.log("Resolve Promise Completed")
})
.catch((error) => {
    console.log(error);
})
.catch(() => {
    console.log("Rejected Promise Completed");
})
.finally(() => {
    console.log("JavaScript Promises");
});


{
    // Another Promise

    let health = "healthy";

    let promise = new Promise(function (resolve, rejected) {
        if (health == "sick") {
            setTimeout(() => {
                rejected("Kayo is sick!");
            }, 5000);
        } else {
            setTimeout(() => {
                resolve("Kayo is healthy!");
            }, 5000);
        }
    }).then((result) => {
        console.log(result);
    }).then(() => {
        console.log("I have a cake and I am a happy");
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log("I still have a party!");
    });
}

{
    let checkEven = new Promise(function(resolve, rejected) {
        let number = 143;
        if (number % 2 == 0) {
            resolve("Number is even");
        } else {
            rejected("Number is odd");
        }
    });

    checkEven
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
}