// JavaScript Arrays

{
    let arr = [1, 2, 3, 4, 5, 6];
    console.log(arr);
    console.log(arr.length);

    arr.length = 10;
    console.log(arr);
}

{
    // Creating Array through Array Object

    let arr1 = new Array([3, 5], [13, 15]);
    console.log(arr1);

    let arr2 = new Array(1, 2, 3);
    console.log(arr2);

    let arr3 = [4, 5, 6];
    console.log(arr3);

    let mergeArr = arr2.concat(arr3);
    console.log(mergeArr);
}

{
    // Array Methods Push, Pop, Shift, Unshift

    let array = [10, 20, 30, 40, 50, 60];
    console.log(array);
    
    array.pop();
    console.log(array);

    array.push(70);
    console.log(array);

    array.shift();
    console.log(array);

    array.unshift(100);
    console.log(array);
}

{
    let newArr1 = [1, 2, 3, 4, 5];
    let newArr2 = [6, 7, 8, 9, 10];
    newArr1[2] = "hello",
    console.log(newArr1);
    console.log(newArr2);

    let newArray = newArr1.concat(newArr2);
    console.log(newArray);

    newArray[2] = 30;
    console.log(newArray);
    console.log(newArr1);
}