// Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>

/// <reference path="../typings/node/node.d.ts" />

export interface M26TrainingZone {
  zone    : number;
  age     : number;
  max     : number;
  pct_max : number;
  pulse   : number;
}

export class M26Age {

  // instance variables
  value:number = 0;

  // Overloaded constructor method; receives either a number or string arg.
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

  training_zones() : M26TrainingZone[] {
    var zones  = [ 0.95, 0.90, 0.85, 0.80, 0.75 ];
    var values = [];
    var max    = this.max_pulse();

    // {"zone":1,"age":57.1,"max":162.9,"pct_max":0.95,"pulse":155}
    for (var i = 0; i < zones.length; i++) {
      var pct = zones[i];
      var obj = {};
      obj['zone']    = i + 1;
      obj['age']     = this.val();
      obj['max']     = max;
      obj['pct_max'] = pct;
      obj['pulse']   = Math.round(max * pct);
      values.push(obj);
    }
    return values;
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
