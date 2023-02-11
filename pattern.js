var readlinesync = require('readline-sync');

var input = readlinesync.question("Provide the input for star pattern: ");
var star = ''

for(let i = 0; i < input; i++) {
    star = star + '* ';
    console.log(star);
}

star = '';

for(let j = input; j > 0; j--) {
    for(let k = 0; k < j; k++) {
        star += '* ';
    }
    star += '\n';
}
console.log(star);