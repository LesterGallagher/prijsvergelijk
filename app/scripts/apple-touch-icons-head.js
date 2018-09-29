const fs = require('fs');

var apple = fs.readdirSync('./').filter(x => x.startsWith('apple'));
const prefix = 'images/meta-icons/'

 apple = apple.map(x => {
    if(x.endsWith('precomposed.png')) {
        var size = '';
        if (x.includes('x')) size = `size="${x.match(/\d+x\d+/)}" `;
        x = `<link ${size}rel="apple-touch-icon-precomposed" href="${prefix}${x}">`
    } else {
        var size = '';
        if (x.includes('x')) size = `size="${x.match(/\d+x\d+/)}" `;
        x = `<link ${size}rel="apple-touch-icon" href="${prefix}${x}">`
    }
    return x;
});

console.log(apple.reverse().join('\n'));


