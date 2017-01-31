const library = require('./lib/color');

function color(option){
  this.add(library.pattern,library.callback);
}

module.exports = color;
