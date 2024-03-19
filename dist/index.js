"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Labas rytas, Lietuva!');
let name = 'Jonas';
console.log(name);
name = '5';
console.log(name);
const lastName = 'Jonaitis';
const age = 99;
const isMarried = true;
console.log(lastName, age, isMarried);
const marks = [10, 2, 8, 4, 6];
const x = marks.join('');
const students = ['Jonas', 'Maryte', 555];
students.push('Petras', 'Ona');
function sum(a, b) {
    return a + b;
}
sum(7, 5);
sum('labas', 5); // 'labas5'
sum(5, 'labas'); // 'labas5'
sum('labas', 'gerai');
function diff(a, b, convertToString) {
    if (convertToString === true) {
        return '' + (a + b);
    }
    else {
        return a + b;
    }
}
const c = diff(7, 5, true);
const d = diff(7, 5, false);
console.log(c, d);
if (typeof c === 'string') {
    console.log('C skaitmenu turi:', c.length);
}
if (typeof d === 'string') {
    console.log('C skaitmenu turi:', d.length);
}
const mix = ['asd', 184];
const mix2 = [485, 'asd', 5148, 'ews', true, false];
const mix3 = [152, 1485, 485];
const mix4 = ['fds', 'asf', 'asga'];
const mix5 = ['fds', 'asf', 'asga', 2514];
console.log(mix5);
const mix6 = [145, 4851, 4895];
console.log(mix6);
const str = 'Labas rytas'.split('').map(x => x.toUpperCase());
console.log(str);
function random(a, b, c, d) {
    return null;
}
console.log(random(1, 2, 3, 4));
