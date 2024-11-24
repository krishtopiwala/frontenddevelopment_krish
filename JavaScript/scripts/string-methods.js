{
    let word = "Hello World";
    console.log(word.length);
    console.log(word.at(3));
    console.log(word.charAt(8));
    console.log(word.charCodeAt(8));

    let str1 = "Good";
    let str2 = "Work";

    console.log(str1.concat(" " +str2));
    console.log(str2.endsWith("rk"));
    console.log(str1.startsWith("Good"));
    console.log(word.indexOf("ld"));
    console.log(str2.padEnd(10, '.'));
    console.log(word.padEnd(15, '!'));
    console.log(str1.padStart(6, "@"));
    console.log(str1.repeat(3));
    console.log(word.replace("World", "JS"));

    let wd = "Hello world this is new world of JS";
    console.log(wd.replaceAll("world", "change"));

    let str3 = "THIS is STRING";
    console.log(str3.toLowerCase());

    let str4 = "hello to javascript";
    console.log(str4.toUpperCase());

    let str5 = "   Thank You!    ";
    console.log(str5);
    console.log(str5.trim());
    console.log(str5.trimEnd());
    console.log(str5.trimStart());
    console.log(wd.slice(8, 15));
    console.log(wd.slice(-10, -4));
    console.log(wd.substring(3, 10));

    {
        // Match 

        let str = "This is JavaScript Match";
        let regex = /[A-Z]/g;

        console.log(str.match(regex));
        console.log(str.match('i'));
    }

    // MatchAll

    {
        let str = "This is JavaScript which is client side scripting language";
        let regex = /[A-Z]/g;

        let matchAll = [...str.matchAll(regex)];
        console.log(matchAll);
    }

    // Spread Operator

    {
        let arr1 = [1, 2, 3];
        let arr2 = [4, 5, 6];

        console.log(arr1.concat(arr2));
        
        arr1[2] = 33;
        let arr3 = [...arr1];
        let arr4 = arr1;
        arr1[1] = 22;
        
        console.log(arr1.concat(arr2));
        console.log(arr3);
        console.log(arr4);        
    }
}