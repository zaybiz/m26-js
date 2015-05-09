// Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

/// <reference path="../typings/node/node.d.ts" />

import os = require('os');


export class M26Age {

  // instance variables
  value:number = 0;

  constructor(n:string);
  constructor(n:number);

  constructor(n:any) {
    if (n && typeof n == "number") {
      this.value = n;
    }
    if (n && typeof n == "string") {
      this.value = parseFloat(n);
    }
  }

  val():number {

    return this.value;
  }

  max_pulse():number {

    if (this.value <= 20) {
      return 200.0;
    }
    else {
      return 220.0 - this.value;
    }
  }

  add(another_instance:M26Age):number {

    if (another_instance) {
      return this.value + another_instance.value;
    }
  }

  subtract(another_instance:M26Age):number {

    if (another_instance) {
      return this.value - another_instance.value;
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
