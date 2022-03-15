function spausdinti(text) {
    return `Stai tavo tekstas: ${text}.`;
}

function kabutese(text) {
    return `Tekstas: "${text}".`;
}

function spausdintuvas(text, format) {
    return format(text);
}

const word = 'Labas';
const t1 = spausdintuvas(word, spausdinti);
const t2 = spausdintuvas(word, kabutese);

console.log(t1);    // Stai tavo tekstas: Labas.
console.log(t2);    // Tekstas: "Labas".