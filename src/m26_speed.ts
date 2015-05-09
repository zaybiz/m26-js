// Copyright 2015, Christopher Joakim <christopher.joakim  static gmail.com>

/// <reference path="../typings/node/node.d.ts" />
/// <reference path="m26_constants.d.ts" />
/// <reference path="m26_age.d.ts" />
/// <reference path="m26_distance.d.ts" />
/// <reference path="m26_elapsed_time.d.ts" />

import c   = require('./m26_constants');
import a   = require('./m26_age');
import d   = require('./m26_distance');
import t   = require('./m26_elapsed_time');

var M26Constants   = c.M26Constants;     // OMIT
var M26Age         = a.M26Age;           // OMIT
var M26Distance    = d.M26Distance;      // OMIT
var M26ElapsedTime = t.M26ElapsedTime;   // OMIT


export class M26Speed {

  constructor(public dist:d.M26Distance, public etime:t.M26ElapsedTime) { }

  mph() : number {

    return this.dist.as_miles() / this.etime.hours();
  }

  kph() : number {

    return this.dist.as_kilometers() / this.etime.hours();
  }

  yph() : number {

    return this.dist.as_yards() / this.etime.hours();
  }

  seconds_per_mile() : number {

    return this.etime.secs / this.dist.as_miles();
  }

  pace_per_mile() : string {
    var spm = this.seconds_per_mile();
    var mm  = Math.floor(spm / 60.0);
    var ss  = spm - (mm * 60.0);
    var s   = '';

    if (ss < 10) {
      s = '0' + ss;
    }
    else {
      s = '' + ss;
    }
    if (s.length > 5) {
      s = s.substring(0, 5);
    }
    return '' + mm + ':' + s;
  }

  age_graded(event_age:a.M26Age, graded_age:a.M26Age) : M26Speed {

    var ag_factor  = event_age.max_pulse() / graded_age.max_pulse();
    var event_secs = this.etime.secs;
    var graded_secs = event_secs * ag_factor;
    var graded_etime = new M26ElapsedTime(graded_secs);
    return new M26Speed(this.dist, graded_etime);
  }

  //age_graded: (event_age, graded_age) ->
  //ag_factor = event_age.max_pulse() / graded_age.max_pulse()
  //event_secs = this.et.seconds()
  //graded_secs = event_secs * ag_factor
  //graded_et   = new ElapsedTime(graded_secs)
  //new Speed(this.d, graded_et)

}

