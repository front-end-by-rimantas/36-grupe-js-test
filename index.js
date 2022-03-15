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

// atsirenkame kokiu spalvu ir kokiais kiekiais yra masyve
const colorsCount = {};
for (const person of people) {
    const { color } = person;
    colorsCount[color] = colorsCount[color] ? colorsCount[color] + 1 : 1;
}

// randame dazniausiai paminetos spalvos kieki (spalvos pavadinimas nera aktualus)
let mostPopularColorCount = 0;
for (const color in colorsCount) {
    const count = colorsCount[color];
    if (count > mostPopularColorCount) {
        mostPopularColorCount = count;
    }
}

// randame visus spalvu pavadinimus, kurie atitinka didziausia paminejimu kieki
const mostPopularColorNames = [];
for (const color in colorsCount) {
    const count = colorsCount[color];
    if (count === mostPopularColorCount) {
        mostPopularColorNames.push(color);
    }
}

console.log(mostPopularColorNames);