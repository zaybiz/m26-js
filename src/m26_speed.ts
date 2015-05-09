// Copyright 2015, Christopher Joakim <christopher.joakim  static gmail.com>

/// <reference path="../typings/node/node.d.ts" />
/// <reference path="m26_constants.d.ts" />
/// <reference path="m26_distance.d.ts" />
/// <reference path="m26_elapsed_time.d.ts" />

import c   = require('./m26_constants');
import d   = require('./m26_distance');
import t   = require('./m26_elapsed_time');

var M26Constants   = c.M26Constants;   // OMIT
var M26Distance    = d.M26Distance;  // OMIT
var M26ElapsedTime = t.M26ElapsedTime;  // OMIT

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
    var ppm = '' + mm + ':' + s;
    if (ppm.length > 5) {
      return ppm.substring(0, 5);
    }
    else {
      return ppm;
    }
  }


}

