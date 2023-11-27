const action = prompt('enter action: add or +, sub or -, mult *, div or /');
const num1 = prompt('enter number #1');
const num2 = prompt('enter number #2');

const x = +num1 + +num2;
const y = num1 - num2;
const z = num1 * num2;
const m = num1 / num2;

switch (action) {
    case 'add':
        console.log(x);
        alert(`${num1} + ${num2} = ${x}`)
        break;
    case '+':
        console.log(x);
        alert(`${num1} + ${num2} = ${x}`)
        break;
    case 'mult':
        console.log(z);
        alert(`${num1} * ${num2} = ${z}`)
        break;
    case '*':
        console.log(z);
        alert(`${num1} * ${num2} = ${z}`)
        break;
    case'div':
        console.log(m);
        alert(`${num1} / ${num2} = ${m}`)
    break;
    case'/':
        console.log(m);
        alert(`${num1} / ${num2} = ${m}`)
    break;
    case'sub':
        console.log(y);
        alert(`${num1} - ${num2} = ${y}`)
    break;
    case'-':
        console.log(y);
        alert(`${num1} - ${num2} = ${y}`)
    break;
    default:
        console.log('User hasnt action');
        alert('User hasnt action');
        break;
}
