# Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>

describe 'Age', ->

  it "should construct with either a String or Number arg", ->
    a1 = new Age(44.4)
    a2 = new Age('55.5')
    expect(a1.val()).isWithin(0.0000000001, 44.4)
    expect(a2.val()).isWithin(0.0000000001, 55.5)

  it "should calculate max_pulse", ->
    a16 = new Age(16)
    a20 = new Age('20')
    a21 = new Age(21)
    a36 = new Age(36)
    a57 = new Age('57')
    expect(a16.max_pulse()).isWithin(0.0000000001, 200.0)
    expect(a20.max_pulse()).isWithin(0.0000000001, 200.0)
    expect(a21.max_pulse()).isWithin(0.0000000001, 199.0)
    expect(a36.max_pulse()).isWithin(0.0000000001, 184.0)
    expect(a57.max_pulse()).isWithin(0.0000000001, 163.0)

  it "should add and subtract", ->
    a16  = new Age(16.9)
    a57  = new Age(57.1)
    sum  = a57.add(a16)
    diff = a57.subtract(a16)
    expect(sum).isWithin(0.0000000001, 74.0)
    expect(diff).isWithin(0.0000000001, 40.2)
