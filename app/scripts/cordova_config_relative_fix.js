const fs = require('fs');

var paths = [
    'platforms/browser/www/cordova-js-src/confighelper.js',
    'platforms/browser/www/cordova.js'
];

paths.forEach(path => {
    var fileContents = fs.readFileSync(path).toString();
    var fileResultContents = fileContents.replace('"/config.xml"', '"config.xml"');
    fs.writeFileSync(path, fileResultContents);
});



