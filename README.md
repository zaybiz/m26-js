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
m26 = require(m26-js")
```

#### Constants

m26-js defines the following:
```
m26.Constants.VERSION:             0.1.1
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

#### Distance

The default unit-of-measure is miles ("m"), but "k" or "y" may also be specified.

Methods uom(), as_miles(), as_kilometers(), as_yards(), add(), and subtract() are available.
```
d1 = new m26.Distance(26.2)
d1.uom()           -> m
d1.as_miles()      -> 26.2
d1.as_kilometers() -> 42.258064516222
d1.as_yards()      -> 46112
```

Distances can be constructed from other units, and added and subtracted.
```
d2 = new m26.Distance(4.8)
d3 = new m26.Distance(10.0, "k")
d4 = d1.subtract(d3)
d5 = d1.add(d2)
d4.as_miles()      -> 20.00000000001364
d5.as_miles()      -> 31
```
#### ElapsedTime

ElapsedTime objects can be constructed from a Number of seconds, or "hh:mm:ss", "hh:mm", or "ss" String values.

Methods as_hhmmss(), seconds(), and hours() are available.
```
t1 = new m26.ElapsedTime(3665)
t1.as_hhmmss() -> 01:01:05
t1.seconds()   -> 3665
t1.hours()     -> 1.0180555555555555

t2 = new m26.ElapsedTime("3:47:30")
t2.as_hhmmss() -> 03:47:30
t2.seconds()   -> 13650
t2.hours()     -> 3.7916666666666665
```

#### Speed

Calculate a Speed based on a given Distance and ElapsedTime.

Methods mph(), kph(), yph(), seconds_per_mile(), and pace_per_mile() are available.
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

#### Age

Construct an Age from either a Number or String value.

Methods val(), max_pulse(), add(), and subtract() are available.
Max pulse is based on the widely-known "220 - age" formula.
```
a20 = new m26.Age(20.2)
a21 = new m26.Age(21)
a57 = new m26.Age("57.1")
a20.val()  ->  20.2
a21.val()  ->  21
a57.val()  ->  57.1
a20.max_pulse()   ->  199.8
a21.max_pulse()   ->  199
a57.max_pulse()   ->  162.9
a57.add(a20)      ->  77.3
a57.subtract(a20) ->  36.900000000000006
```

#### AgeCalculator

Calculate and return an Age object.

```
a0 = m26.AgeCalculator.calculate("2014-10-01", "2014-11-01")
a1 = m26.AgeCalculator.calculate("1960-10-01", "2014-10-01")
a0.val()  ->  0.08487337440109514
a1.val()  ->  54.08350444900753
```


### Release History

* 2014-11-xx   v0.1.1  Under development.  Added classes Age and AgeCalculator.
* 2014-11-01   v0.1.0  Initial working version.
* 2014-11-01   v0.0.3  alpha 3
* 2014-11-01   v0.0.2  alpha 2
* 2014-11-01   v0.0.1  alpha 1


### Future Enhancements

* Add support for fractional seconds.
* Add support for heart-rate training-zone calculation.
* Add support for age-graded times.
