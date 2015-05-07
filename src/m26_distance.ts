// Copyright 2015, Christopher Joakim <christopher.joakim  static gmail.com>

/// <reference path="../typings/node/node.d.ts" />
/// <reference path="m26_constants.d.ts" />
/// <reference path="m26_enums.d.ts" />

import os  = require('os');
import e   = require('./m26_enums');
import c   = require('./m26_constants');

export class M26Distance {

  // instance variables
  value : number = 0;
  uom   : e.M26UOM = e.M26UOM.MILES;

  constructor(n : string, u : e.M26UOM = e.M26UOM.MILES) {

    this.value = parseFloat(n);
    this.uom   = u;
  }

  as_miles() : number {

    switch (this.uom) {
      case e.M26UOM.MILES:
        return this.value;
      case e.M26UOM.KILOMETERS:
        return this.value /  c.M26Constants.KILOMETERS_PER_MILE;
      case e.M26UOM.YARDS:
        return this.value / c.M26Constants.YARDS_PER_MILE;
      default:
        return 0;
    }
  }

  as_kilometers() : number {

    switch (this.uom) {
      case e.M26UOM.MILES:
        return this.value * c.M26Constants.KILOMETERS_PER_MILE;
      case e.M26UOM.KILOMETERS:
        return this.value;
      case e.M26UOM.YARDS:
        return (this.value / c.M26Constants.YARDS_PER_MILE) * c.M26Constants.MILES_PER_KILOMETER;
      default:
        return 0;
    }
  }

  as_yards() : number {

    switch (this.uom) {
      case e.M26UOM.MILES:
        return this.value * c.M26Constants.YARDS_PER_MILE;
      case e.M26UOM.KILOMETERS:
        return (this.value / c.M26Constants.MILES_PER_KILOMETER) * c.M26Constants.YARDS_PER_MILE;
      case e.M26UOM.YARDS:
        return this.value;
      default:
        return 0;
    }
  }

  add(another_instance : M26Distance) : M26Distance {

    if (this.populated(another_instance)) {
      var m1 = this.as_miles();
      var m2 = another_instance.as_miles();
      return new M26Distance('' + (m1 + m2));
    }
    else {
      return new M26Distance('' + this.as_miles());
    }
  }

  subtract(another_instance : M26Distance) : M26Distance {

    if (this.populated(another_instance)) {
      var m1 = this.as_miles();
      var m2 = another_instance.as_miles();
      return new M26Distance('' + (m1 - m2));
    }
    else {
      return new M26Distance('' + this.as_miles());
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
