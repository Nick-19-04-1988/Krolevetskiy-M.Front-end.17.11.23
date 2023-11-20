const x = prompt('how old are you?');
const y = prompt('you name?');
const z = prompt('you lastName');
console. log({ x, y, z });
alert(`your old is ${ x },Name: ${ y } and Surname: ${ z } ?`);  

//enter a 5-digit number
const e = prompt('enter a 5-digit number');
const firstInt = e.charAt(0);
const sectInt = e.charAt(1);
const thirtInt = e.charAt(2);
const forthtInt = e.charAt(3);
const lasttInt = e % 10;

console.log(`${firstInt} ${sectInt} ${thirtInt} ${forthtInt} ${lasttInt}`);
alert(`You actually entered a number: ${firstInt} ${sectInt} ${thirtInt} ${forthtInt} ${lasttInt} ?`);

const j = prompt('do not judge strictly, ok ?');
if (j === 'ok') {
    console.log('Thanks a lot');
} else if (j === 'no') {
    console.log('I ll try harder');
} else {
    console.log('enter ok or no');
}