// String Methods

{
    // Q-2

    let str = "Hello World";
    let regex = /[aeiou]/g;
    let count = str.match(regex);

    console.log(`Number of vowels ${count.length}`);
}

{
    // Q-3

    let str = "This is a JavaScript. It is strings in JavaScript";
    console.log(str.includes("JavaScript"));
}

{
    // Q-6

    let trimStr = "    How are you?     ";
    console.log(`Before trim: ${trimStr}`);
    console.log(`After trim: ${trimStr.trim()}`);
}

{
    // Q-7

    
    let str = "JavaScript is a programming language used for creating dynamic content on websites.";
    
    // using slice()
    console.log(str.slice(0, 10));

    // using substring()
    console.log(str.substring(0, 10));
}

{
    // Q-8

    let str = "This is Javascript";
    console.log(str.indexOf('i'));
    console.log(str.lastIndexOf('i'));
}

{
    // Q-9

    let splitStr = "This is JavaScript, and Javascript is a scripting language";

    let getSplitStr = splitStr.split(',');
    console.log(getSplitStr);
    console.log(getSplitStr.join());
}

{
    // Q-10

    let name = "Mohan";
    console.log(name.startsWith('M'));
    console.log(name.endsWith('n'));
}