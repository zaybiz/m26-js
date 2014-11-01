# Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>

describe 'M26Speed', ->

  it 'calculates a 2-mile walk, with round numbers', ->
    d = new M26Distance(2.0)
    t = new M26ElapsedTime('30:00')
    s = new M26Speed(d, t)
    expect(s.mph()).isWithin(0.000001, 4)
    expect(s.kph()).isWithin(0.000001, 6.45161290324)
    expect(s.yph()).isWithin(0.000001, 7040)
    expect(s.seconds_per_mile()).isWithin(0.000001, 900)
    expect(s.pace_per_mile()).toBe('15:00')

  it 'calculates a marathon, with fractional numbers', ->
    d = new M26Distance(26.2)
    t = new M26ElapsedTime('03:47:30')
    s = new M26Speed(d, t)
    expect(s.mph()).isWithin(0.000001, 6.90989010989011)
    expect(s.kph()).isWithin(0.000001, 11.1449840482344)
    expect(s.yph()).isWithin(0.000001, 12161.4065934066)
    expect(s.seconds_per_mile()).isWithin(0.000001, 520.992366412214)
    expect(s.pace_per_mile()).toBe('8:40.99')

