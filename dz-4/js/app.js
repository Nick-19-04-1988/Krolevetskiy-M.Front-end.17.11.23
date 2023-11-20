const num1 = prompt('enter number #1');
const num2 = prompt('enter number #2');

const x = +num1 + +num2;
const y = num1 - num2;
const z = num1 * num2;
const m = num1 / num2;

alert(`
        ${num1} + ${num2} = ${ x } 
        ${num1} - ${num2} = ${ y } 
        ${num1} * ${num2} = ${ z } 
        ${num1} / ${num2} = ${ m }`
        );

        const j = prompt('do not judge strictly, ok ?');
        if (j === 'ok') {
            alert('Have a good day!!!')
            console.log('Thanks a lot');
        } else if (j === 'no') {
            console.log('I ll try harder');
        } else {
            console.log('enter ok or no');
        }