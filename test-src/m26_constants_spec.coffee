# Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>

describe 'M26', ->

  it 'defines VERSION', ->
    expect(Constants.VERSION).toBe('0.1.2')

  it 'defines UOM_MILES', ->
    expect(Constants.UOM_MILES).toBe('m')

  it 'defines UOM_KILOMETERS', ->
    expect(Constants.UOM_KILOMETERS).toBe('k')

  it 'defines UOM_YARDS', ->
    expect(Constants.UOM_YARDS).toBe('y')

  it 'defines UNITS_OF_MEASURE', ->
    expect(Constants.UNITS_OF_MEASURE).toEqual(['m', 'k', 'y'])

  it 'defines KILOMETERS_PER_MILE', ->
    expect(Constants.KILOMETERS_PER_MILE).isWithin(0.000001, 1.61290322581)

  it 'defines YARDS_PER_MILE', ->
    expect(Constants.YARDS_PER_MILE).isWithin(0.000001,  1760.0)

  it 'defines MILES_PER_KILOMETER', ->
    expect(Constants.MILES_PER_KILOMETER).isWithin(0.000001, 0.62)

  it 'defines YARDS_PER_KILOMETER', ->
    expect(Constants.YARDS_PER_KILOMETER).isWithin(0.000001, 1091.2)

  it 'defines SECONDS_PER_HOUR', ->
    expect(Constants.SECONDS_PER_HOUR).toBeGreaterThan(3599.999)
    expect(Constants.SECONDS_PER_HOUR).toBeLessThan(3600.001)
