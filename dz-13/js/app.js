const arr =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log(arr);
    arr.sort();
    console.log(arr);
const arr2 = arr.splice(0, 10);
    console.log(arr);
    console.log(`кол-во положительных э-тов ${arr.length}`);
let res = arr.reduce(function(sum, elem) {
        return sum + elem;
    }, 0);
    
    console.log(`сумма положительных элементов ${res}`);

const arr3 =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
const min = (values) => values.reduce((x, y) => Math.min(x, y));
console.log(min(arr3));

let max = arr3[0];

arr3.forEach(function (elem, index) {

    if(index > 0 ){
        if(max < elem){
            max = elem;
        }
    }
});

console.log(max);

const arr4 =[16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let negative = arr4.filter(elem => (elem > 0));
console.log(`количество отрицательных элементов ${negative.length}`);


const arr5 = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
const isOdd = (num) => num % 2 !== 0;
const odd = arr5.filter(isOdd);
let positive = odd.filter(elem =>(elem > 0) );
console.log(`количество нечетных положительных элементов ${positive.length}`);

const isParr = (num) => num % 2 == 0;
const parr = arr5.filter(isParr);
let positive1 = parr.filter(elem =>(elem > 0) );
console.log(`количество парных положительных элементов ${positive1.length}`);

let sum = 0;
for (let i = 0; i < positive1.length; i++){
    sum += positive1[i];
}
console.log(`суммa четных положительных элементов ${sum}`);

let sum1 = 0;
for (let i = 0; i < positive.length; i++){
    sum1 += positive[i];
}
console.log(`суммa нечетных положительных элементов ${sum1}`);


let sum2 = 1;
for (let i = 0; i < arr.length; i++){
    sum2 *= arr[i];
}
console.log(`произведение положительных элементов ${sum2}`);

let arr6 = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let max1 = arr6[0];
let maxi = 0;
for (let i = 1; i < arr6.length; i++) {
  if (arr6[i] > max1) {
    max1 = arr6[i];
    arr6[maxi] = 0;
    maxi = i;
  } else {
    arr6[i] = 0;
  }
}

console.log(arr6);