const math = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
}

const action = '-';
const n1 = 7;
const n2 = 5;

const ans = math[action](n1, n2);

console.log(`${n1} ${action} ${n2} = ${ans}`);