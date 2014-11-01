(function() {
  var d, m26, x;

  m26 = require('./lib/m26.js');

  x = m26.M26;

  console.log(x);

  console.log(m26.M26.UOM_YARDS);

  d = new m26.M26Distance(26.2);

}).call(this);
