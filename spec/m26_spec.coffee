
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

describe 'M26', ->

  it 'defines UOM_MILES', ->
    expect(M26.UOM_MILES).toBe('m')

  it 'defines UOM_KILOMETERS', ->
    expect(M26.UOM_KILOMETERS).toBe('k')

  it 'defines UOM_YARDS', ->
    expect(M26.UOM_YARDS).toBe('y')

  it 'defines UNITS_OF_MEASURE', ->
    expect(M26.UNITS_OF_MEASURE).toEqual(['m', 'k', 'y'])

  it 'defines KILOMETERS_PER_MILE', ->
    expect(M26.KILOMETERS_PER_MILE).isWithin(0.000001, 1.61290322581)

  it 'defines YARDS_PER_MILE', ->
    expect(M26.YARDS_PER_MILE).isWithin(0.000001,  1760.0)

  it 'defines MILES_PER_KILOMETER', ->
    expect(M26.MILES_PER_KILOMETER).isWithin(0.000001, 0.62)

  it 'defines YARDS_PER_KILOMETER', ->
    expect(M26.YARDS_PER_KILOMETER).isWithin(0.000001, 1091.2)

  it 'defines SECONDS_PER_HOUR', ->
    expect(M26.SECONDS_PER_HOUR).toBeGreaterThan(3599.999)
    expect(M26.SECONDS_PER_HOUR).toBeLessThan(3600.001)

# =============================================================

describe 'Distance', ->

  beforeEach ->
    x = 0

  it "should assume miles as UOM, and convert to other units", ->
    d = new Distance(26.2)
    expect(d.uom()).toBe(M26.UOM_MILES)
    expect(d.as_miles()).isWithin(0.0000000001, 26.2)
    expect(d.as_kilometers()).isWithin(0.0000000001, 42.258064516222)
    expect(d.as_yards()).isWithin(0.000001, 46112.0)

  it "should calculate a 10K, and convert to other units", ->
    d = new Distance(10.0, 'k')
    expect(d.uom()).toBe(M26.UOM_KILOMETERS)
    expect(d.as_miles()).isWithin(0.0000000001, 6.2)
    expect(d.as_kilometers()).isWithin(0.0000000001, 10.0)
    expect(d.as_yards()).isWithin(0.000001, 10912.0)

  it "should calculate an 1800y, and convert to other units", ->
    d = new Distance(1800.0, 'y')
    expect(d.uom()).toBe(M26.UOM_YARDS)
    expect(d.as_miles()).isWithin(0.0000000001, 1.0227272727272727)
    expect(d.as_kilometers()).isWithin(0.0000000001, 1.6495601173056818)
    expect(d.as_yards()).isWithin(0.000001, 1800)

  it "should subtract", ->
    d1 = new Distance(26.2)
    d2 = new Distance(10.0, 'k')
    d3 = d1.subtract(d2)
    expect(d3.uom()).toBe(M26.UOM_MILES)
    expect(d3.as_miles()).isWithin(0.0000000001, 20.0)

# =============================================================

describe 'ElapsedTime', ->

  it 'constructs with a number of seconds', ->
    t = new ElapsedTime(3665)
    expect(t.as_hhmmss()).toBe('01:01:05')
    expect(t.seconds()).isWithin(0.000001, 3665.0)
    expect(t.hours()).isWithin(0.000001, 1.0180555555555555)

  it 'constructs with a hh:mm:ss string', ->
    t = new ElapsedTime('1:1:5')
    expect(t.as_hhmmss()).toBe('01:01:05')

    t = new ElapsedTime('01:01:05')
    expect(t.as_hhmmss()).toBe('01:01:05')

    t = new ElapsedTime(' 01 : 01 : 05 ')
    expect(t.as_hhmmss()).toBe('01:01:05')

  it 'constructs with a mm:ss string', ->
    t = new ElapsedTime('1:5')
    expect(t.as_hhmmss()).toBe('00:01:05')

    t = new ElapsedTime('01:57')
    expect(t.as_hhmmss()).toBe('00:01:57')
    expect(t.seconds()).isWithin(0.000001, 117.0)
    expect(t.hours()).isWithin(0.000001, 0.0325)

  it 'constructs with a ss string', ->
    t = new ElapsedTime('5')
    expect(t.as_hhmmss()).toBe('00:00:05')

    t = new ElapsedTime(' 5 ')
    expect(t.as_hhmmss()).toBe('00:00:05')
    expect(t.seconds()).isWithin(0.000001, 5.0)
    expect(t.hours()).isWithin(0.000001, 0.001388888888888889)

# =============================================================

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
