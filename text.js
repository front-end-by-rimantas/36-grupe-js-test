const text = {
    first: s => s[0],
    middle: s => s[Math.floor((s.length - 1) / 2)],
    last: s => s[s.length - 1],
};

const position = 'middle'; // first | middle | last

const word = 'abcde';

const letter = text[position](word);

console.log(`${position} letter of word "${word}" is ${letter}`);