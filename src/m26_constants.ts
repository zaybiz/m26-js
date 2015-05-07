// Copyright 2015, Christopher Joakim <christopher.joakim  static gmail.com>

/// <reference path="../typings/node/node.d.ts" />
/// <reference path="m26_enums.d.ts" />

import os    = require('os');
import enums = require('./m26_enums');

export class M26Constants {

  // class variables
  static VERSION             : string = '0.3.0';
  static UOM_MILES           : string = 'm';
  static UOM_KILOMETERS      : string = 'k';
  static UOM_YARDS           : string = 'y';

  static UNITS_OF_MEASURE    : string[] = [ M26Constants.UOM_MILES, M26Constants.UOM_KILOMETERS, M26Constants.UOM_YARDS ];

  static KILOMETERS_PER_MILE : Number = 1.609344;
  static MILES_PER_KILOMETER : Number = 0.621371192237334;
  static YARDS_PER_KILOMETER : Number = 1093.6132983377076;
  static FEET_PER_KILOMETER  : Number = 3280.839895013123;
  static FEET_PER_METER      : Number = 3.280839895013123;
  static YARDS_PER_MILE      : Number = 1760.0;
  static SECONDS_PER_HOUR    : Number = 3600.0;
}
