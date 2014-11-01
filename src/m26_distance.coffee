# Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>

root = exports ? this

class M26Distance

  constructor: (d=0, uom=M26.UOM_MILES) ->
    @d = parseFloat(d)
    @d = 0 unless @d
    if uom
      @u = uom.toString().toLowerCase()
    else
      @u = M26.UOM_MILES

    unless @u in M26.UNITS_OF_MEASURE
      @u = M26.UOM_MILES

  uom: ->
    @u

  dist: ->
    @d

  as_miles: ->
    switch @u
      when M26.UOM_MILES then @d
      when M26.UOM_KILOMETERS then @d / M26.KILOMETERS_PER_MILE
      when M26.UOM_YARDS then @d / M26.YARDS_PER_MILE
      else 0

  as_kilometers: ->
    switch @u
      when M26.UOM_MILES then @d * M26.KILOMETERS_PER_MILE
      when M26.UOM_KILOMETERS then @d
      when M26.UOM_YARDS then (@d / M26.YARDS_PER_MILE) / M26.MILES_PER_KILOMETER
      else 0

  as_yards: ->
    switch @u
      when M26.UOM_MILES then @d * M26.YARDS_PER_MILE
      when M26.UOM_KILOMETERS then (@d * M26.MILES_PER_KILOMETER) * M26.YARDS_PER_MILE
      when M26.UOM_YARDS then @d
      else 0

  subtract: (another_instance) ->
    if another_instance
      d1 = @as_miles()
      d2 = another_instance.as_miles()
      new M26Distance(d1 - d2)

root.M26Distance = M26Distance
