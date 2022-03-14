const people = [
    {
        name: 'Petras',
        color: 'blue',
    },
    {
        name: 'Petras',
        color: 'red',
    },
    {
        name: 'Petras',
        color: 'green',
    },
    {
        name: 'Petras',
        color: 'blue',
    },
    {
        name: 'Petras',
        color: 'green',
    },
    {
        name: 'Petras',
        color: 'orange',
    },
];

const colors = [];

// for (let i = 0; i < people.length; i++) {
//     const person = people[i];
//     const { color } = person;
//     colors.push(color);
// }

for (const person of people) {
    const { color } = person;
    colors.push(color);
}

// people.forEach(person => {
//     const { color } = person;
//     colors.push(color);
// })

console.log(colors);