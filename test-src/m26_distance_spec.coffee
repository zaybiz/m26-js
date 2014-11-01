# Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>

describe 'M26Distance', ->

  it "should assume miles as UOM, and convert to other units", ->
    d = new M26Distance(26.2)
    expect(d.uom()).toBe(M26.UOM_MILES)
    expect(d.as_miles()).isWithin(0.0000000001, 26.2)
    expect(d.as_kilometers()).isWithin(0.0000000001, 42.258064516222)
    expect(d.as_yards()).isWithin(0.000001, 46112.0)

  it "should calculate a 10K, and convert to other units", ->
    d = new M26Distance(10.0, 'k')
    expect(d.uom()).toBe(M26.UOM_KILOMETERS)
    expect(d.as_miles()).isWithin(0.0000000001, 6.2)
    expect(d.as_kilometers()).isWithin(0.0000000001, 10.0)
    expect(d.as_yards()).isWithin(0.000001, 10912.0)

  it "should calculate an 1800y, and convert to other units", ->
    d = new M26Distance(1800.0, 'y')
    expect(d.uom()).toBe(M26.UOM_YARDS)
    expect(d.as_miles()).isWithin(0.0000000001, 1.0227272727272727)
    expect(d.as_kilometers()).isWithin(0.0000000001, 1.6495601173056818)
    expect(d.as_yards()).isWithin(0.000001, 1800)

  it "should subtract", ->
    d1 = new M26Distance(26.2)
    d2 = new M26Distance(10.0, 'k')
    d3 = d1.subtract(d2)
    expect(d3.uom()).toBe(M26.UOM_MILES)
    expect(d3.as_miles()).isWithin(0.0000000001, 20.0)
