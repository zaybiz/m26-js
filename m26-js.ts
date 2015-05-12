/// <reference path="../typings/node/node.d.ts" />

// file: src/m26_constants.ts

export class M26Constants {
  // class variables
  static VERSION          : string = '0.3.0';
  static UOM_MILES        : string = 'm';
  static UOM_KILOMETERS   : string = 'k';
  static UOM_YARDS        : string = 'y';
  static UNITS_OF_MEASURE : string[] = [M26Constants.UOM_MILES, M26Constants.UOM_KILOMETERS, M26Constants.UOM_YARDS];
  static KILOMETERS_PER_MILE : number = 1.609344;
  static MILES_PER_KILOMETER : number = 0.621371192237334;
  static YARDS_PER_KILOMETER : number = 1093.6132983377076;
  static FEET_PER_KILOMETER  : number = 3280.839895013123;
  static FEET_PER_METER      : number = 3.280839895013123;
  static YARDS_PER_MILE      : number = 1760.0;
  static SECONDS_PER_HOUR    : number = 3600.0;
}

// file: src/m26_age.ts

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

// file: src/m26_age_calculator.ts

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

// file: src/m26_distance.ts

export class M26Distance {
  // instance variables
  value : number  = 0;
  uom   : string  = M26Constants.UOM_MILES;
  constructor(num:number, unit:string = M26Constants.UOM_MILES) {
    this.value = num;
    this.uom   = ('' + unit).trim();
  }
  as_miles():number {
    switch (this.uom) {
      case M26Constants.UOM_MILES:
        return this.value;
      case M26Constants.UOM_KILOMETERS:
        return this.value / M26Constants.KILOMETERS_PER_MILE;
      case M26Constants.UOM_YARDS:
        return this.value / M26Constants.YARDS_PER_MILE;
      default:
        return 0;
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
      default:
        return 0;
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
      default:
        return 0;
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

// file: src/m26_elapsed_time.ts

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
  seconds() : number {
    return this.secs;
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

// file: src/m26_speed.ts

export class M26Speed {
  constructor(public dist:d.M26Distance, public etime:t.M26ElapsedTime) {
  }
  mph():number {
    return this.dist.as_miles() / this.etime.hours();
  }
  kph():number {
    return this.dist.as_kilometers() / this.etime.hours();
  }
  yph():number {
    return this.dist.as_yards() / this.etime.hours();
  }
  seconds_per_mile():number {
    return this.etime.secs / this.dist.as_miles();
  }
  pace_per_mile():string {
    var spm = this.seconds_per_mile();
    var mm = Math.floor(spm / 60.0);
    var ss = spm - (mm * 60.0);
    var s = '';
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
  age_graded(event_age:a.M26Age, graded_age:a.M26Age):M26Speed {
    var ag_factor = event_age.max_pulse() / graded_age.max_pulse();
    var event_secs = this.etime.secs;
    var graded_secs = event_secs * ag_factor;
    var graded_etime = new M26ElapsedTime(graded_secs);
    return new M26Speed(this.dist, graded_etime);
  }
  projected_time(another_distance:d.M26Distance, algorithm = 'simple'):string {
    if (algorithm == 'riegel') {
      var t1 = this.etime.secs;
      var d1 = this.dist.as_miles();
      var d2 = another_distance.as_miles();
      var t2 = t1 * Math.pow((d2 / d1), 1.06);
      return new M26ElapsedTime(t2).as_hhmmss();
    }
    else {
      var secs = this.seconds_per_mile() * another_distance.as_miles();
      return new M26ElapsedTime(secs).as_hhmmss();
    }
  }
}