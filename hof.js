/*
HOF - higher order function
HOF funkcija yra ta funkcija, kuri kaip bent viena is parametru gauna kita funkcija.
*/

function sum(a, b) {
    return a + b;
}

function rezultatas(func, a, b) {
    return `Funkcijos rezultatas kai a = ${a} ir b = ${b} yra ${func(a, b)}.`;
}

const r = rezultatas(sum, 7, 5);

const marks = [10, 2, 8, 4, 6, 7, 3, 5, 8];
const marks2 = [2, 4, 5, 7, 8, 10];

// vidurkis
// maziausias (blogiausias)
// didziausias (geriausias)
// mediana
// moda - dazniausiai pasitaikanti reiksme
// kiek yra geriausiu pazymiu (>=8)
// kiek yra prasciausiu pazymiu (<=5)
// kiek yra desimtuku

const vidurkis = marks.reduce((total, mark) => total + mark, 0) / marks.length;
console.log('Vidurkis:', vidurkis);

const maziausias1 = Math.min(...marks);
console.log('Maziausias:', maziausias1);

const maziausias2 = marks.sort((a, b) => a - b)[0];
console.log('Maziausias:', maziausias2);

const didziausias1 = Math.max(...marks);
console.log('Didziausias:', didziausias1);

const didziausias2 = marks.sort((a, b) => a - b)[marks.length - 1];
console.log('Didziausias:', didziausias2);

const didziausias3 = marks.sort((a, b) => b - a)[0];
console.log('Didziausias:', didziausias3);

const medianaIndex = Math.floor(marks.length / 2);
const mediana = marks.sort((a, b) => a - b)[medianaIndex];
console.log('Mediana:', mediana);

const medianaIndex2 = Math.floor(marks2.length / 2);
const mediana2 = marks2.sort((a, b) => a - b)[medianaIndex2];
console.log('Mediana:', mediana2);

const geriausi = marks.filter(m => m >= 8);
console.log('Geriausi:', geriausi);

// const coolMarks = [];
// for (const mark of marks) {
//     if (mark >= 8) {
//         coolMarks.push(mark);
//     }
// }
// console.log(coolMarks);

const blogiausi = marks.filter(m => m <= 5);
console.log('Blogiausi:', blogiausi);

const desimtukai = marks.filter(m => m === 10).length;
console.log('Desimtuku kiekis:', desimtukai);

const dvygubiPazymiai = marks.map(m => m * 2);
console.log(dvygubiPazymiai);

console.log('##################');

const people = ['Jonas Jonaitis Jonaitaitis', 'Maryte Marytaite', 'Petras Petraitis', 'Ona Onaite Onaityte'];

const inicialai = people.map(p => p.split(' ').map(w => w[0] + '.').join(''));

// const inicialai = [];

// for (const person of people) {
//     let init = '';
//     const words = person.split(' ');
//     for (const word of words) {
//         const letter = word[0];
//         init += letter + '.';
//     }
//     inicialai.push(init);
// }

console.log(inicialai);