const glob = require('glob');

var files = glob.sync('src/*').reduce((acc, value) => {
  acc[value] = value;
  return acc;
}, {});

console.log(files);