###
Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>
###

root = exports ? this

class Constants

  @VERSION:        '0.1.5'
  @UOM_MILES:      'm'
  @UOM_KILOMETERS: 'k'
  @UOM_YARDS:      'y'
  @UNITS_OF_MEASURE: [@UOM_MILES, @UOM_KILOMETERS, @UOM_YARDS]
  @KILOMETERS_PER_MILE = 1.61290322581
  @YARDS_PER_MILE      = 1760.0
  @MILES_PER_KILOMETER = 0.62
  @YARDS_PER_KILOMETER = 1091.2
  @SECONDS_PER_HOUR    = 3600.0

root.Constants = Constants
