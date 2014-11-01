# Copyright 2014, Christopher Joakim, JoakimSoftware LLC <christopher.joakim@gmail.com>

root = exports ? this

class Age

  constructor: (n) ->
    @value = parseFloat(n)

  val: ->
    @value

  max_pulse: ->
    if @val() <= 20
      200.0
    else
      220.0 - @val()

  add: (another_instance) ->
    if another_instance
      @val() + another_instance.val()

  subtract: (another_instance) ->
    if another_instance
      @val() - another_instance.val()

root.Age = Age
