## m26-js

### Purpose

A Node.js library for running, cycling, and swimming calculations.

### Examples

#### Setup
Add m26-js to your project or package.json file:
```
npm install m26-js
```

Require m26-js in your code:
```
m26 = require("./lib/m26.js")
```

#### Constants
m26-js defines the following:
```
m26.Constants.UOM_MILES:           m
m26.Constants.UOM_KILOMETERS:      k
m26.Constants.UOM_YARDS:           y
m26.Constants.UNITS_OF_MEASURE:    ["m","k","y"]
m26.Constants.KILOMETERS_PER_MILE: 1.61290322581
m26.Constants.YARDS_PER_MILE:      1760
m26.Constants.MILES_PER_KILOMETER: 0.62
m26.Constants.YARDS_PER_KILOMETER: 1091.2
m26.Constants.SECONDS_PER_HOUR:    3600
```

#### Speed
Calculate a Speed based on a given Distance and ElapsedTime.
```
d = new m26.Distance(26.2)
t = new m26.ElapsedTime("03:47:30")
s = new m26.Speed(d, t)
mph: 6.90989010989011
kph: 11.144984048234374
yph: 12161.406593406595
seconds_per_mile: 520.9923664122138
pace_per_mile:    8:40.99
```


### Release History

* 2014-11-01   v0.0.3  alpha 3
* 2014-11-01   v0.0.2  alpha 2
* 2014-11-01   v0.0.1  alpha 1


### Future Enhancements

* Add support for fractional seconds.
* Add support for heart-rate training-zone calculation.
* Add support for age-graded times.
