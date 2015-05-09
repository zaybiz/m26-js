// Copyright 2015, Christopher Joakim <christopher.joakim  static gmail.com>

/// <reference path="../typings/node/node.d.ts" />
/// <reference path="m26_constants.d.ts" />

import os  = require('os');
import c   = require('./m26_constants');

var M26Constants = c.M26Constants;


export class M26ElapsedTime {

  // instance variables
  hh   : number = 0;
  mm   : number = 0;
  ss   : number = 0;
  secs : number = 0.0;

  // Overloaded constructor method; receives either a number or string arg.
  constructor(n:string);
  constructor(n:number);
  constructor(n:any) {
    if (n && typeof n == "number") {
      this.initialize_from_number(n);
    }
    if (n && typeof n == "string") {
      this.initialize_from_string(n);
    }
  }

  hours() : number {

    return this.secs / M26Constants.SECONDS_PER_HOUR;
  }

  as_hhmmss() : string {

    var h = this.zero_pad(this.hh);
    var m = this.zero_pad(this.mm);
    var s = this.zero_pad(this.ss);
    return h + ':' + m + ':' + s
  }

  private initialize_from_number(n:number) {

    this.secs = n;
    this.hh   = Math.floor(this.secs / M26Constants.SECONDS_PER_HOUR);
    var rem   = this.secs - (this.hh * M26Constants.SECONDS_PER_HOUR);
    this.mm   = Math.floor(rem / 60.0);
    this.ss   = rem - (this.mm * 60.0);
  }

  private initialize_from_string(n:string) {

    var tokens = n.split(':');

    switch (tokens.length) {
      case 3:
        this.hh = parseInt(tokens[0], 10);
        this.mm = parseInt(tokens[1], 10);
        this.ss = parseInt(tokens[2], 10);
        break;
      case 2:
        this.mm = parseInt(tokens[0], 10);
        this.ss = parseInt(tokens[1], 10);
        break;
      case 1:
        this.ss = parseInt(tokens[0], 10);
        break;
    }
    this.secs = (this.hh * 3600) + (this.mm * 60) + this.ss;
  }

  private zero_pad(n:number) : string {

    if (n < 10) {
      return '0' + n;
    }
    else {
      return '' + n;
    }
  }

}

