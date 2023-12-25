function calculateArr() {
  let ownArray = ['qwr', 'qwe', 'wqe', 'wqe', 'qwe', 'rew', 'ewtr', 'fbd', 'sdv', 2, 6, 1, 4, 1, 9, 1, 152, 43, 1, 'end'];
  let sum = 0;
  let count = 0;

  for(let i = 0; i < ownArray.length; i++){
      // ownArray[i] = parseInt(ownArray[i]);
      if (!isNaN(ownArray[i])) {
          count += 1;
          sum += ownArray[i];
      }
      console.log(count);
      // console.log(sum);
  }
  return  itog = sum / count;
}

let result = calculateArr();
alert(result);




function doMath(x, znak, y) {
  x = +prompt("Введите первое число");
  y = +prompt("Введите второе число");
  znak = prompt("Введите операцию +, -, *, /, %, ^ ");
  let result;

  switch (znak) {
      case "+":
          result = x + y;
          break;
      case "-":
          result = x - y;
          break;
      case "*":
          result = x * y;
          break;
      case "/":
          result = x / y;
          break;  
      case "%":
          result = x % y;
          break;
      case "^":
          result = Math.pow(x,y);
          break;    
  }

  return result;
}

let functionResult = doMath();
alert(functionResult);



function arrAdd() {
  let arr = [];
  let amount = +prompt("Введите количество массивов в первом массиве");

  for(let i = 0; i < amount; i++) {
      arr.push([]);

      let amount2 = prompt("Введите количество елементов" + (i + 1));

      for(let j = 0; j < amount2; j++) {
          let elem = prompt("Введите текст" + (j + 1));
          arr[i].push([elem]);
      }
  }

  console.log(arr);
}

let functionResult1 = arrAdd();




