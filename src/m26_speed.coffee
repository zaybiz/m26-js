# Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>

root = exports ? this

class M26Speed

  constructor: (d, et) ->
    [@d, @et] = [d, et]

  mph: ->
    @d.as_miles() / @et.hours()

  kph: ->
    @d.as_kilometers() / @et.hours()

  yph: ->
    @d.as_yards() / @et.hours()

  pace_per_mile: ->
    spm = @seconds_per_mile()
    mm  = Math.floor(spm / 60.0)
    ss  = spm - (mm * 60)

    if ss < 10
      ss = '0' + ss
    else
      ss = '' + ss

    if ss.length > 5
      ss = ss.substring(0, 5)

    '' + mm + ':' + ss

  seconds_per_mile: ->
    @et.secs / @d.as_miles()

  projected_time: (another_distance, algorithm='simple') ->
    if algorithm is 'riegel'
      t1 = @et.secs
      d1 = @d.as_miles()
      d2 = another_distance.as_miles()
      # t2 = t1.to_f * ((d2.to_f / d1.to_f) ** pow)   Math.pow(3,3)
      t2 = t1 * Math.pow((d2 / d1), 1.06)
      et = new M26ElapsedTime(t2);
      return et.as_hhmmss()
    else
      secs = @seconds_per_mile() * another_distance.as_miles()
      et = new M26ElapsedTime(secs);
      return et.as_hhmmss()
    end

root.M26Speed = M26Speed
