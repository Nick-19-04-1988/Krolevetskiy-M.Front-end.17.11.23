/*for (let x = 9; x < 20 ; x++) {
    let result = x + 1;
    console.log(` ${result} ,`);
};*/




function f1() {
    let p;
    p = document.getElementById('out');
    for (let i = 10; i <= 20; i++) {
        p.innerHTML += i+',';
        };
        console.log(out);
    };


// квадрат суммы
function f2() {
    let i;
    p = document.getElementById('out2');
    for (let i = 10; i < 21; i++) {
       p.innerHTML  += i ** 2 +',';
       let result = i ** 2;
    console.log(`${i}**2 = ${result}`);
   };
};

// 7*
function f3() {
    let i;
    p = document.getElementById('out3');
    for (let i = 1 ; i <= 10; i++) {
        p.innerHTML += 7 * i + ',';
        let result = 7 * i;
    console.log(`7 * ${i} = ${result}`);
    };
};


// сумма чисел 1-15
function f4() {
    let lastNumber = 15;
    let i = 1;
    let sum = 0;
    p = document.getElementById('out4');
    while(i <= lastNumber) {
         sum += +i;
        i++
        };
        p.innerHTML = sum;
        console.log(sum);
    };

//произведение 15-35
  function f5() {
    let lastNumber = 35;
    let i = 15;
    let sum = 0;
    p = document.getElementById('out5');
    while(i <= lastNumber) {
         sum =i*i;
        i++
        };
        p.innerHTML = sum;
        console.log(sum);
    };

//среднее арифметическое 1-500
  /*function calculateTotal(number) {
    let sum = 0;
  
    for(let i = 1; i <= number; i++){
      sum += i / 500;
    }
  
    return sum;
  }
  
  console.log(calculateTotal(500));
*/

  function f6() {
    let lastNumber = 500;
    let i = 1;
    let sum = 0;
    p = document.getElementById('out6');
    while(i <= lastNumber) {
         sum += +i / 500;
        i++
        };
        p.innerHTML = sum;
        console.log(sum);
    };

// сумма парных чисел 30-80
  function f7() {
    let lastNumber = 80;
    let i = 30;
    let sum = 0;
    p = document.getElementById('out7');
    while(i <= lastNumber) {
         sum += +i;
        i=i+2
        };
        p.innerHTML = sum;
        console.log(sum);
    };
// числа кратные 3
function f8() {
    let p;
    p = document.getElementById('out8');
    for (let i = 99; i <= 200; i=i+3) {
        p.innerHTML += i+',';
        };
        console.log(p);
    };

    // делители натурального числа
   
    function f9() {
        let p;
        p = document.getElementById('out9');
        let count = 0,
        summ = 0;
    for (let i = 2; i * 2 <= 10; i++) {
        if (10 % i == 0) {
           console.log(`Делитель этого числа: ${i}`);
           p.innerHTML +=`Делитель этого числа: ${i} <br /><br />`;
        };
    };
}

// количество парных делителей натурального числа
function f10() {
    let p;
        p = document.getElementById('out10');
    let count = 0,
    summ = 0;
for (let i = 2; i * 2 <= 10; i++) {
    if (10 % i === 0) {
    };
    if (i % 2 === 0) {
        count++;
        
};
}
     console.log(`Количество четных делителей: ${count}`);
     p.innerHTML +=`<hr/> Количество четных делителей: ${count} <br /><br />`;
}


    //сумма парных делителей натурального числа
    function f11() {
        let p;
            p = document.getElementById('out11');
        let count = 0,
        summ = 0;
    for (let i = 2; i * 2 <= 10; i++) {
        if (10 % i === 0) {
        };
        if (i % 2 === 0) {
            count++;
            summ += i;
    };
    }
         console.log(`Сумма четных делителей: ${summ}`);
         p.innerHTML +=`Сумма четных делителей: ${summ} <br /><br />`;
    }

    //таблица умножения
    function f12() {
        let p;
            p = document.getElementById('out12');

for (let i = 1; i <= 10;  i += 1) {
    for (let j = 1; j <= 10; j += 1) {
      console.log(`${i} x ${j} = ${i * j}`);
      p.innerHTML +=`${i} x ${j} = ${i * j} <br />`;
    }
    console.log('');
    
  }; 
}