## m26-js

### Purpose

A Node.js library for running, cycling, and swimming calculations.

### Getting Started

```
npm install m26-js
```

### Examples

#### M26Distance

Creation and unit-of-measure conversion:

```
d = new M26Distance(26.2)  # defaults to miles
d.uom()           -> M26.UOM_MILES
d.as_miles()      -> 26.2
d.as_kilometers() -> 42.258064516222
d.as_yards()      -> 46112.0

d = new M26Distance(10.0, 'k')
d.uom()      -> M26.UOM_KILOMETERS
d.as_miles() -> 6.2)

d = new M26Distance(1800.0, 'y')
d.uom()           -> M26.UOM_YARDS
d.as_kilometers() -> 1.6495601173056818
```

Addition and subtraction:

```
d1 = new M26Distance(26.2)
d2 = new M26Distance(4.8)
d3 = d1.add(d2)
d3.as_miles() -> 31.0

d1 = new M26Distance(26.2)
d2 = new M26Distance(10.0, 'k')
d3 = d1.subtract(d2)
d3.as_miles() -> 20.0
```

#### M26ElapsedTime

Creation, formatting, and time calculation functions.

Construct with a number of seconds:

```
t = new M26ElapsedTime(3665)
t.as_hhmmss() -> '01:01:05'
t.seconds()   ->  3665.0
t.hours()     ->  1.0180555555555555
```

Construct from a hh:mm:ss String

```
t = new M26ElapsedTime('01:01:05')
t.as_hhmmss() -> '01:01:05'
t.seconds()   ->  3665.0
```

Construct from a mm:ss String

```
t = new M26ElapsedTime('1:5')
t.as_hhmmss() -> '00:01:05'
```

Construct from a mm:ss String

```
t = new M26ElapsedTime('1:5')
t.as_hhmmss() -> '00:01:05'
```

### Release History

* 2014-11-01   v0.0.1  Initial release


### Future Enhancements

# Add support for fractional seconds.
# Add support for heart-rate training-zone calculation.
# Add support for age-graded times.
