// Copyright 2015, Christopher Joakim <christopher.joakim  static gmail.com>

/// <reference path="../typings/node/node.d.ts" />
/// <reference path="m26_constants.d.ts" />

import c   = require('./m26_constants');

var M26Constants = c.M26Constants; // OMIT

export class M26Distance {

  // instance variables
  value : number  = 0;
  uom   : string  = M26Constants.UOM_MILES;

  constructor(num:number, unit:string = M26Constants.UOM_MILES) {

    this.value = num;
    this.uom   = ('' + unit).trim();

    // if necessary, coerce the uom into a valid default value.
    switch (this.uom) {
      case M26Constants.UOM_MILES:
        break;
      case M26Constants.UOM_KILOMETERS:
        break;
      case M26Constants.UOM_YARDS:
        break;
      default:
        this.uom = M26Constants.UOM_MILES;
    }
  }

  as_miles():number {

    switch (this.uom) {
      case M26Constants.UOM_MILES:
        return this.value;
      case M26Constants.UOM_KILOMETERS:
        return this.value / M26Constants.KILOMETERS_PER_MILE;
      case M26Constants.UOM_YARDS:
        return this.value / M26Constants.YARDS_PER_MILE;
    }
  }

  as_kilometers():number {

    switch (this.uom) {
      case M26Constants.UOM_MILES:
        return this.value * M26Constants.KILOMETERS_PER_MILE;
      case M26Constants.UOM_KILOMETERS:
        return this.value;
      case M26Constants.UOM_YARDS:
        return (this.value / M26Constants.YARDS_PER_MILE) / M26Constants.MILES_PER_KILOMETER;
    }
  }

  as_yards():number {

    switch (this.uom) {
      case M26Constants.UOM_MILES:
        return this.value * M26Constants.YARDS_PER_MILE;
      case M26Constants.UOM_KILOMETERS:
        return (this.value * M26Constants.MILES_PER_KILOMETER) * M26Constants.YARDS_PER_MILE;
      case M26Constants.UOM_YARDS:
        return this.value;
    }
  }

  add(another_instance:M26Distance):M26Distance {

    if (this.populated(another_instance)) {
      var m1 = this.as_miles();
      var m2 = another_instance.as_miles();
      return new M26Distance(m1 + m2);
    }
    else {
      return new M26Distance(this.as_miles());
    }
  }

  subtract(another_instance:M26Distance):M26Distance {

    if (this.populated(another_instance)) {
      var m1 = this.as_miles();
      var m2 = another_instance.as_miles();
      return new M26Distance(m1 - m2);
    }
    else {
      return new M26Distance(this.as_miles());
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
