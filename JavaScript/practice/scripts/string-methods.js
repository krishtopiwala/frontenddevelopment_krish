// String Methods

{
    // Q-1

    let str = "Hello World";
    let strSplit = str.split('');
    let reverseStr = strSplit.reverse();
    let joinStr = reverseStr.join('');
    console.log(joinStr);
}

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
    // Q-4

    let newString = "how are you?";
    let splitString = newString.split(' ');
    
    console.log(splitString);

    for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i][0].toUpperCase() + splitString[i].substring(1);
    }
    
    console.log(splitString.join(' '));
}

{
    // Q-5

    let replaceStr = "This is HTML. HTML stands for Hyper Text Markup Language";
        let regex = /HTML/g;

        let repl = replaceStr.match(regex).toString();
        console.log(repl.replace("CSS"));
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