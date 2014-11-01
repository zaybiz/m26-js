
m26 = require('./lib/m26.js')

x = m26.M26

console.log(x)
console.log(m26.M26.UOM_YARDS)

d = new m26.M26Distance(26.2)
# t = new m26.M26ElapsedTime('03:47:30')
# s = new m26.M26Speed(d, t)
# console.log("mph: " + s.mph())
# console.log("kph: " + s.kph())
# console.log("yph: " + s.yph())
# console.log("seconds_per_mile: " + s.seconds_per_mile())
# console.log("pace_per_mile:    " + s.pace_per_mile())
