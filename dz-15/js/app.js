const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);

const newArray = array.splice(4, 1)
console.log(array,newArray);




let arr = [1,2,3,4,5,6];
let element = 5; // элемент, который хотим удалить/вставить в массив
let issetElement = arr.find(item => item === element);

if(issetElement){
  arr.forEach(function(item, i){
    if(item == element){
      arr.splice(i, 1);
    }
  });
} else {
  arr.push(element);
}
console.log('result', arr);
