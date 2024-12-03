// Array

{
    const array = [1, 2, 3, 4, 5];
    // console.log(array);
}

// Array Methods

{
    // Array.at()

    let array1 = [1, 2, 3, 4, 5];

    console.log(array1.at(3));
    console.log(array1.at(-2));
}

{
    // Array.concat()

    let array1 = ["HTML", "CSS", "JavaScript"];
    let array2 = [1, 2, 3, 4, 5];
    let array3 = [1, 4, 9, 16, 25];

    console.log(array1.concat(array2, array3));
}

{
    // Array.entries()

    let arr1 = [11, 12, 13, 14, 15, 16];
    let iterator = arr1.entries();

    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
}

{
    // Array.every()

    let arr1 = [10, 12, 14, 16, 18, 20];
    console.log(arr1.every((item) => item > 8));
}



{
    // Array.fill()
    // fill(value)
    // fill(value, start)
    // fill(value, start, end)

    let fillArray = [2, 4, 6, 8, 10];
    console.log(fillArray);
    // console.log(fillArray.fill(100));
    // console.log(fillArray.fill(100, 2));
    console.log(fillArray.fill(100, 2, 4));
}

{
    // Array.find()
    // find(callbackFn)
    // find(callbackFn, thisArg)

    let findArray = [2, 3, 4, 5, 6, 7, 8];
    console.log(findArray.find((item) => item == 2));
}

{
    // Array.findIndex()

    let findIndexArray = [4, 9, 16, 25, 36];
    console.log(findIndexArray.findIndex((item) => item < 1));
}

{
    // Array.findLast()

    let findLast =  [5, 12, 50, 130, 44];
    console.log(findLast.findLast((item) => item > 45));
}

{
    // Array.findLastIndex()

    let findLastIndex =  [5, 12, 50, 130, 44];
    console.log(findLastIndex.findLastIndex((item) => item > 45));
}

{
    // Array.includes()

    let includesArray = ["dog", "cat", "camel", "elephant", "dog", "cow"];
    console.log(includesArray);
    console.log(includesArray.includes("elephant"));
    console.log(includesArray.includes("dog", 5));
}

{
    // Array.indexOf()

    let indexOfArray = ["dog", "cat", "camel", "elephant", "dog", "cow"];
    console.log(indexOfArray.indexOf("elephant"));
    console.log(indexOfArray.indexOf("lion"));
    console.log(indexOfArray.indexOf("dog", 1));
}

{
    // Array.join()

    let joinArr = ["HTML", "CSS", "JavaScript"];
    console.log(joinArr);
    console.log(joinArr.join());
    console.log(joinArr.join('-'));
    console.log(joinArr.join(' '));
}

{
    // Array.keys()

    let keysArray = [5, 10, 15, 20, 25];
    
    for (let keys of keysArray.keys()) {
        console.log(keys);
    }
}

{
    // Array.lastIndexOf()

    let lastIndexOfArray = ["dog", "cat", "camel", "elephant", "dog", "cow"];
    console.log(lastIndexOfArray.lastIndexOf("lion"))
}

{
    // Array.reverse()

    let reverseArray = ["one", "two", "three"];
    console.log(reverseArray);
    console.log(reverseArray.reverse());
}

{
    // Array.values()

    let valuesArr = ["a", "b", "c", "d"];
    for (let value of valuesArr.values()) {
        console.log(value);
    }
}

{
    // Array.copyWithin()

    let copyWithinArray = ["🍎", "🍊", "🥭", "🍓", "🍒", "🍉"];
    // console.log(copyWithinArray);
    console.log(copyWithinArray.copyWithin(2));
    console.log(copyWithinArray.copyWithin(1));
    console.log(copyWithinArray.copyWithin(2, 4));
    console.log(copyWithinArray.copyWithin(2, 2));
    // console.log(copyWithinArray.copyWithin(2, 0, 1));
                    
    let copyWithinArray1 = [10, 15, 20, 25, 30, 35, 40, 45];
    // console.log(copyWithinArray.copyWithin(2));
    // console.log(copyWithinArray.copyWithin(0));
    // console.log(copyWithinArray.copyWithin(1, 3));
    console.log(copyWithinArray1.copyWithin(1, 2, 5));
}

{
    // Array.filter()

    let arr = [5, 10, 561, 21, 87];

    let filter = arr.filter((item) => (item % 5 == 0));

    console.log(filter);
}

{
    // Array.flat()

    {
        let array = [1, 2, 3, [4, 5, 6, [7, 8, 9, 10]]];

        console.log(array.flat(2));
    }
}

{
    // Array.forEach()

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let forEachArr = arr.forEach((item) => console.log(item));

    console.log(forEachArr);
}

{
    // Array.map()

    let array = [5, 10, 15, 20, 25, 30];
    let mapArray = array.map((item) => item * 5);

    console.log(mapArray);
    console.log(array.map((item) => item > 10));
}