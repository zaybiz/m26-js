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

  // instance variables
  //dist   : M26Distance;
  //time   : M26ElapsedTime;

  constructor(dist:d.M26Distance, time:t.M26ElapsedTime) {

  }
}

