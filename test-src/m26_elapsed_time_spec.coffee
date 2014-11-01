# Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>

describe 'M26ElapsedTime', ->

  it 'constructs with a number of seconds', ->
    t = new M26ElapsedTime(3665)
    expect(t.as_hhmmss()).toBe('01:01:05')
    expect(t.seconds()).isWithin(0.000001, 3665.0)
    expect(t.hours()).isWithin(0.000001, 1.0180555555555555)

  it 'constructs with a hh:mm:ss string', ->
    t = new M26ElapsedTime('1:1:5')
    expect(t.as_hhmmss()).toBe('01:01:05')

    t = new M26ElapsedTime('01:01:05')
    expect(t.as_hhmmss()).toBe('01:01:05')

    t = new M26ElapsedTime(' 01 : 01 : 05 ')
    expect(t.as_hhmmss()).toBe('01:01:05')

  it 'constructs with a mm:ss string', ->
    t = new M26ElapsedTime('1:5')
    expect(t.as_hhmmss()).toBe('00:01:05')

    t = new M26ElapsedTime('01:57')
    expect(t.as_hhmmss()).toBe('00:01:57')
    expect(t.seconds()).isWithin(0.000001, 117.0)
    expect(t.hours()).isWithin(0.000001, 0.0325)

  it 'constructs with a ss string', ->
    t = new M26ElapsedTime('5')
    expect(t.as_hhmmss()).toBe('00:00:05')

    t = new M26ElapsedTime(' 5 ')
    expect(t.as_hhmmss()).toBe('00:00:05')
    expect(t.seconds()).isWithin(0.000001, 5.0)
    expect(t.hours()).isWithin(0.000001, 0.001388888888888889)

  # it 'constructs with a fractional ss.fff string', ->
  #   t = new M26ElapsedTime('5.123')
  #   expect(t.as_hhmmss()).toBe('00:00:05')
