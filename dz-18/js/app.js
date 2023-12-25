const x = prompt ('число, которое нужно возвести')
const n = prompt ('степень, в котороую возводим число')


function pow(x, n) {
  if (n >= 1) {
    return x ** n;
  } else {
    return x * pow(x, n - 1);
  }
}

alert( pow(x, n) );