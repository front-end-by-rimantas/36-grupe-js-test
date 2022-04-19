const name = 'Petras';

String.prototype.firstLetter = function () {
    return ('' + this)[0];
}

String.prototype.lastLetter = function () {
    const word = '' + this
    return word[word.length - 1];
}

const nameUp = name.toUpperCase();
const nameDown = name.toLowerCase();
const pirmaRaide = name.firstLetter();
const paskutineRaide = name.lastLetter();

console.log(name);
console.log(nameUp);
console.log(nameDown);
console.log('Pirma raide:', pirmaRaide);
console.log('Paskutine raide:', paskutineRaide);

console.log('Vasara'.lastLetter());
console.log('Vasara'.firstLetter());

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }

//     bark() {
//         console.log(`${this.name}: bark bark...`);
//     }
// }

// const rex = new Dog('Rexas');
// rex.bark();


const marks = [10, 2, 8, 4];

Array.prototype.average = function () {
    let suma = 0;
    const kiekis = this.length;
    for (let i = 0; i < kiekis; i++) {
        suma += this[i];
    }
    return suma / kiekis;
}

console.log('Vidurkis:', marks.average());
console.log('Vidurkis:', [10, 2, 7, 3].average());