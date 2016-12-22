// import test from 'ava';

// function tallestMountain(heights) {
//     if (heights.length === 0) {
//         return null;
//     }

//     let tallest = heights[0];
//     for (let i = 1; i < heights.length; i++) {
//         if (tallest < heights[i]) {
//             tallest = heights[i];
//         }
//     }
//     return tallest;
// }

// // writing tests is essentially writing functions that run our own code
// // The goal of writing tests is to try to break things!

// // test() function is built into ava and sets up a test
// test('Fnd the tallest', function (trial) {
//     // create new test
//     // set up dif trials that the test should evaluate
//     // example trial: check that the return value of constainsVowel('hi') is TRUE
//     trial.is(tallestMountain([5, 1, 8, 3]), 8);
//     trial.is(tallestMountain([14, 1, 8, 3]), 14);
//     trial.is(tallestMountain([14, 1, 8, 33]), 33);
//     trial.is(tallestMountain([14, 33, 8, 33]), 33);
//     //trial.is(tallestMountain([14, 1, 'WOOOW', 33]), 33);
//     trial.is(tallestMountain([-14, -33, -8, -33]), -8);
//     trial.is(tallestMountain([-140, -33, -8, -33]), -8);
//     trial.is(tallestMountain([]), null);

// });

import test from 'ava';


function pigLatin(phrase) {
    let words = phrase.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].slice(1) + words[i][0] + 'ay';
    }
    let output = '';
    for (let i = 0; i < words.length; i++) {
        output = output + words.join(' ');
    }
    return output;
}

pigLatin('clemson');
//console.log(pigLatin('clemson'));

test('Pig Latin-ify', function (trial) {
    trial.is(pigLatin('clemson'), 'lemsoncay');
    trial.is(pigLatin('h'), 'hay');
    trial.is(pigLatin('e'), 'eay');
    trial.is(pigLatin('akjsdawkjerbawke'), 'kjsdawkjerbawkeaay');
    trial.is(pigLatin(''), 'ay');
});