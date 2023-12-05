
const x = prompt('enter numbers');
const arr = [...x]; 
    arr.sort();
    console.log(arr);
const arr2 = arr.splice(1, 3);
    console.log(arr);
    