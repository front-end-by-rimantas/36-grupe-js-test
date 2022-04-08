/*
... operator
- SPREAD (išskleisti)
- REST (visi likę)
*/
const numbers = [1, 8, -4, 7, 2, 10];

const [pirmas, antras, ...kitiSkaiciai] = numbers;
console.log(pirmas, antras, kitiSkaiciai);


const age = 87;

const person = {
    name: 'Petras',
    age: 99,
    isMarried: true
}

const { age: personAge, ...p } = person;
console.log(age, personAge, p);


const m1 = [1, 2];
const m2 = [3, 4];
const m3 = [5, 6];
m1.push(888);

const m4 = [m1[0], m1[1]];

const m5 = [11, 12, ...m1, ...m2, 7, 8, ...m3];
console.log(m5);

const dog = {
    sunsVardas: 'Rexas',
    sunsSpalva: 'brown'
}

const cat = {
    katesVardas: 'Rainis',
    katesSpalva: 'grey'
}

const gyvunai = {
    ...dog,
    luckyNumber: 777,
    ...cat
}
console.log(gyvunai);

console.log('################');

let user = {};
const username = 'Petras';
const marks = [10, 2, 8, 4];
const color = 'red';
const number = 777;

// user = {
//     username,
//     marks,
//     color,
//     luckyNumber: number,
// }

user = { ...user, username };
user = { ...user, marks };
user = { ...user, color };
user = { ...user, luckyNumber: number };

console.log(user);

console.log('################');

const student1 = {
    name: 'Petras',
    age: 99,
    isMarried: true
}

const student2 = {
    name: 'Maryte',
    age: 87,
    luckyNumber: 159
}

const joinedStudents = {
    ...student2,
    ...student1,
};

console.log(joinedStudents);

const petrasNotMarried = {
    ...student1,
    isMarried: false
}
console.log(petrasNotMarried);