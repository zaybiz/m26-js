
/*
This purpose of this file is to test the generated m26.js file, outside of jasmine,
before deployment to npm.  It (accurately) generates Examples section of the README.md
file based on actual working code and output.
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
 */

(function() {
  var d, m26, s, t;

  m26 = require("./lib/m26.js");

  console.log('');

  console.log('### Examples');

  console.log('');

  console.log('#### Setup');

  console.log('Add m26-js to your project or package.json file:');

  console.log('```');

  console.log('npm install m26-js');

  console.log('```');

  console.log('');

  console.log('Require m26-js in your code:');

  console.log('```');

  console.log('m26 = require("./lib/m26.js")');

  console.log('```');

  console.log('');

  console.log('#### Constants');

  console.log('m26-js defines the following:');

  console.log('```');

  console.log('m26.Constants.UOM_MILES:           ' + m26.Constants.UOM_MILES);

  console.log('m26.Constants.UOM_KILOMETERS:      ' + m26.Constants.UOM_KILOMETERS);

  console.log('m26.Constants.UOM_YARDS:           ' + m26.Constants.UOM_YARDS);

  console.log('m26.Constants.UNITS_OF_MEASURE:    ' + JSON.stringify(m26.Constants.UNITS_OF_MEASURE));

  console.log('m26.Constants.KILOMETERS_PER_MILE: ' + m26.Constants.KILOMETERS_PER_MILE);

  console.log('m26.Constants.YARDS_PER_MILE:      ' + m26.Constants.YARDS_PER_MILE);

  console.log('m26.Constants.MILES_PER_KILOMETER: ' + m26.Constants.MILES_PER_KILOMETER);

  console.log('m26.Constants.YARDS_PER_KILOMETER: ' + m26.Constants.YARDS_PER_KILOMETER);

  console.log('m26.Constants.SECONDS_PER_HOUR:    ' + m26.Constants.SECONDS_PER_HOUR);

  console.log('```');

  console.log('');

  console.log('#### Speed');

  console.log('Calculate a Speed based on a given Distance and ElapsedTime.');

  console.log('```');

  d = new m26.Distance(26.2);

  t = new m26.ElapsedTime('03:47:30');

  s = new m26.Speed(d, t);

  console.log('d = new m26.Distance(26.2)');

  console.log('t = new m26.ElapsedTime("03:47:30")');

  console.log('s = new m26.Speed(d, t)');

  console.log('mph: ' + s.mph());

  console.log('kph: ' + s.kph());

  console.log('yph: ' + s.yph());

  console.log('seconds_per_mile: ' + s.seconds_per_mile());

  console.log('pace_per_mile:    ' + s.pace_per_mile());

  console.log('```');

  console.log('');

  console.log('');

}).call(this);
