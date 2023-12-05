let str = '';
for (let i = 20; i <= 30; i=i+0.5) {
  str += i + ' ';
}
console.log(str.trim());
/*
function f1() {
    let p;
    p = document.getElementById('out');
    for (let i = 20; i <= 30; i+0.5) {
        p.innerHTML += i+'';
        };
    };
*/

function f2() {
    let i;
    p = document.getElementById('out2');
    for (let i = 10; i < 110; i+= 10) {
    p.innerHTML  += `${i} * 27 = ${i * 27} <br>`;
       let result = i * 27;
    console.log(`${i}*27 = ${result}`);
   };
};

//
/*const ltSqr = function*(n) {
    const limit = Math.min(100, Math.sqrt(n));
    let i = 1;
    while (i <= limit) {
      yield i++;
    }
  }
  const x = prompt('enter numbers')
  let N = x;
  for (const x of ltSqr(N)) {
    console.log(x);
  };
*/
function f3() {
    p = document.getElementById('out3');
    const ltSqr = function*(n) {
        const limit = Math.min(100, Math.sqrt(n));
        let i = 1;
        while (i <= limit) {
          yield i++;
        }
      }
      const x = prompt('enter numbers')
        let N = x;
        for (const x of ltSqr(N)) {
     {
        p.innerHTML += x + ',';
    console.log(x);
    };
    };
}

// 
function f4() {
    const x = prompt('enter numbers');
    let n = x;
    p = document.getElementById('out4');
    nextPrime:
    for (let i = 2; i <= n; i++) { 
        for (let j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
    }
        p.innerHTML += i + ' ;<br>';
        console.log(i);
    };
};

//
    function three(num) {
        while (num % 3 === 0) {
          num /= 3;
        }
        return num === 1;
      }
      
      console.log(three(81));
      console.log(three(126));