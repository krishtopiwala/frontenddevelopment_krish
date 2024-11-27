// Date Object

{
    // Q-1

    let currentDate = new Date();
    console.log(currentDate);
}

{
    // Q-2

    let currentDate = new Date();
    console.log("YYYY-MM-DD " + currentDate.getFullYear() + "-" + currentDate.getMonth() + "-" + currentDate.getDate());
}

{
    // Q-3

    let date1 = new Date("december 3 2024");
    let date2 = new Date();

    console.log(date1.getDay() + date2.getDay() + 1);
}

{
    // Q-4

    let newDate = new Date();
    console.log(newDate.getDay());
}

{
    // Q-5

    let currentDate = new Date();
    console.log(currentDate);
    currentDate.setDate(currentDate.getDate() + 7);
    console.log(currentDate.toString());
}

{
    // Q-6

    let currentDate = new Date();
    console.log(currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());
}

{
    // Q-7

    let date = new Date("2024 2 0");
    console.log(date.getDate());
}

{
    // Q-8

    let time = new Date();
    // time.setHours(24);
    // time.setMinutes(0);
    
    
    if (time.getHours() >= 12 && time.getHours() < 24) {
        console.log(time.getHours() + ":" + time.getMinutes() + " PM");
    } else {
        console.log(time.getHours() + ":" + time.getMinutes() + " AM");
    }
}

{
    // Q-9

    let date1 = new Date("November 21 2024 10:15:10");
    let date2 = new Date("November 1 2024 14:45:10");
    console.log(date1);
    console.log(date2);

    let differenceHours = date2.getHours() - date1.getHours();
    let differenceMinutes = date2.getMinutes() - date1.getMinutes();

    console.log(Math.abs(differenceHours) + ":" + Math.abs(differenceMinutes));
}

{
    // Q-10

    let countdownTimer = new Date();
    console.log(countdownTimer.getHours() + " " + countdownTimer.getMinutes());

    if ((countdownTimer.getHours() == 14) && (countdownTimer.getMinutes() == 28)) {
        console.log("Happy New Year");
    }
}