// Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

/// <reference path="../typings/node/node.d.ts" />
/// <reference path="m26_constants.d.ts" />
/// <reference path="m26_age.d.ts" />

import c   = require('./m26_constants');
import a   = require('./m26_age');

var M26Constants   = c.M26Constants;     // OMIT
var M26Age         = a.M26Age;           // OMIT


export class M26AgeCalculator {

  constructor() {

  }

  milliseconds_per_year() : number {

    return 31557600000; // value is: 1000 * 60 * 60 * 24 * 365.25
  }

  calculate(birth_yyyy_mm_dd : string, as_of_yyyy_mm_dd : string) : a.M26Age {

    var age = new M26Age(-1);
    var birth_date = null;
    var as_of_date = null;

    if (this.populated(birth_yyyy_mm_dd)) {
      birth_date = new Date(birth_yyyy_mm_dd);
    }
    if (this.populated(as_of_yyyy_mm_dd)) {
      as_of_date = new Date(as_of_yyyy_mm_dd);
    }

    if (this.populated(birth_date) && this.populated(as_of_date)) {
      var ms_diff = as_of_date - birth_date;
      var years   = ms_diff / this.milliseconds_per_year();
      return new M26Age(years);
    }
    else {
      return new M26Age(-1);
    }
  }

  private populated(obj:any) {

    if (obj === undefined) {
      return false;
    }
    if (obj === null) {
      return false;
    }
    return true;
  }

}
