# Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>

beforeEach ->

  # See https://www.packtpub.com/sites/default/files/downloads/7204OS_The_Future_Jasmine_2_0.pdf

  jasmine.Expectation.addMatchers({
    isWithin: (tolerance, expected) ->
      {
        compare: (actual, tolerance, expected) ->
          @pass = true
          @msg  = 'Ok'
          min   = expected - tolerance
          max   = expected + tolerance
          @data = { 'actual' : actual , 'expected' : expected, 'tolerance' : tolerance, 'min' : min, 'max' : max }

          if false
            console.log('data: ' + JSON.stringify(@data))

          if actual > max
            @pass = false
            @msg  = 'value is too large; expected ' + expected + ' but got ' + actual

          if actual < min
            @pass = false
            @msg  = 'value is too small; expected ' + expected + ' but got ' + actual

          unless pass
            console.log('failed: ' + JSON.stringify(@data))

          { pass: @pass, message: @msg }
      }
  })

describe 'Speed', ->

  it 'calculates a 2-mile walk, with round numbers', ->
    d = new Distance(2.0)
    t = new ElapsedTime('30:00')
    s = new Speed(d, t)
    expect(s.mph()).isWithin(0.000001, 4)
    expect(s.kph()).isWithin(0.000001, 6.45161290324)
    expect(s.yph()).isWithin(0.000001, 7040)
    expect(s.seconds_per_mile()).isWithin(0.000001, 900)
    expect(s.pace_per_mile()).toBe('15:00')

  it 'calculates a marathon, with fractional numbers', ->
    d = new Distance(26.2)
    t = new ElapsedTime('03:47:30')
    s = new Speed(d, t)
    expect(s.mph()).isWithin(0.000001, 6.90989010989011)
    expect(s.kph()).isWithin(0.000001, 11.1449840482344)
    expect(s.yph()).isWithin(0.000001, 12161.4065934066)
    expect(s.seconds_per_mile()).isWithin(0.000001, 520.992366412214)
    expect(s.pace_per_mile()).toBe('8:40.99')
