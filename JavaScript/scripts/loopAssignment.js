// 1. Write a program that calculates the sum of all numbers from 1 to 100.

{
    let sum = 0;

    for (let num = 1; num <= 100; num++) {
        sum = sum + num;
    }
    console.log("Sum of all numbers from 1 to 100: ", sum);
}

// 2. Write a program that prints the multiplication table of a given number (for example, 5).

{
    let num = 5;
    let i = 1;

    while (i <= 10) {
        console.log(`${num} * ${i} = ${num * i}`);
        i++;
    }
}

// 3. Write a program that calculates the factorial of a given number (for example, 5!).

{
    let i = 5;
    let fact = 1;

    while (i >= 1) {
        fact = fact * i;
        i--;
    }
    console.log("Factorial ", fact);
}

// 4. Write a program that prints the first 10 numbers in the Fibonacci sequence.

{
    let n1 = 0;
    let n2 = 1;
    let n3 = 1;
    let i = 1;

    console.log(`Fibonacci Series ${n1}`);

    while (i <= 10) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;

        i++;
        console.log(`Fibonacci Series ${n1}`);
    }
}

// 5. Write a program that reverses a given string.

{
    let str = "JavaScript";

    for (let i = str.length - 1; i >= 0; i--) {
        console.log(str[i]);
    }
}

// 8. Write a program that counts the number of vowels in a given string.

{
    let word = "Hello";
    let countVowels = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' || word[i] == 'u') {
            countVowels++;
        }
    }
    console.log(`Vowels ${countVowels}`);
}