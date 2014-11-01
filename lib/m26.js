
/*
Copyright 2014, Christopher Joakim, <christopher.joakim@gmail.com>
 */

(function() {
  var Distance, ElapsedTime, M26, Speed, root,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  M26 = (function() {
    function M26() {}

    M26.UOM_MILES = 'm';

    M26.UOM_KILOMETERS = 'k';

    M26.UOM_YARDS = 'y';

    M26.UNITS_OF_MEASURE = [M26.UOM_MILES, M26.UOM_KILOMETERS, M26.UOM_YARDS];

    M26.KILOMETERS_PER_MILE = 1.61290322581;

    M26.YARDS_PER_MILE = 1760.0;

    M26.MILES_PER_KILOMETER = 0.62;

    M26.YARDS_PER_KILOMETER = 1091.2;

    M26.SECONDS_PER_HOUR = 3600.0;

    return M26;

  })();

  Distance = (function() {
    function Distance(d, uom) {
      var _ref;
      if (d == null) {
        d = 0;
      }
      if (uom == null) {
        uom = M26.UOM_MILES;
      }
      this.d = parseFloat(d);
      if (!this.d) {
        this.d = 0;
      }
      if (uom) {
        this.u = uom.toString().toLowerCase();
      } else {
        this.u = M26.UOM_MILES;
      }
      if (_ref = this.u, __indexOf.call(M26.UNITS_OF_MEASURE, _ref) < 0) {
        this.u = M26.UOM_MILES;
      }
    }

    Distance.prototype.uom = function() {
      return this.u;
    };

    Distance.prototype.dist = function() {
      return this.d;
    };

    Distance.prototype.as_miles = function() {
      switch (this.u) {
        case M26.UOM_MILES:
          return this.d;
        case M26.UOM_KILOMETERS:
          return this.d / M26.KILOMETERS_PER_MILE;
        case M26.UOM_YARDS:
          return this.d / M26.YARDS_PER_MILE;
        default:
          return 0;
      }
    };

    Distance.prototype.as_kilometers = function() {
      switch (this.u) {
        case M26.UOM_MILES:
          return this.d * M26.KILOMETERS_PER_MILE;
        case M26.UOM_KILOMETERS:
          return this.d;
        case M26.UOM_YARDS:
          return (this.d / M26.YARDS_PER_MILE) / M26.MILES_PER_KILOMETER;
        default:
          return 0;
      }
    };

    Distance.prototype.as_yards = function() {
      switch (this.u) {
        case M26.UOM_MILES:
          return this.d * M26.YARDS_PER_MILE;
        case M26.UOM_KILOMETERS:
          return (this.d * M26.MILES_PER_KILOMETER) * M26.YARDS_PER_MILE;
        case M26.UOM_YARDS:
          return this.d;
        default:
          return 0;
      }
    };

    Distance.prototype.subtract = function(another_instance) {
      var d1, d2;
      if (another_instance) {
        d1 = this.as_miles();
        d2 = another_instance.as_miles();
        return new Distance(d1 - d2);
      }
    };

    return Distance;

  })();

  ElapsedTime = (function() {
    function ElapsedTime(val) {
      var _ref;
      if (val == null) {
        val = '00:00:00';
      }
      _ref = [0, 0, 0, 0], this.hh = _ref[0], this.mm = _ref[1], this.ss = _ref[2], this.secs = _ref[3];
      if (typeof val === 'number') {
        this.initialize_from_number(val);
      } else {
        this.initialize_from_string(val);
      }
    }

    ElapsedTime.prototype.initialize_from_number = function(n) {
      var error, rem;
      try {
        this.secs = new Number(n);
        this.hh = Math.floor(this.secs / M26.SECONDS_PER_HOUR);
        rem = this.secs - (this.hh * M26.SECONDS_PER_HOUR);
        this.mm = Math.floor(rem / 60.0);
        return this.ss = rem - (this.mm * 60.0);
      } catch (_error) {
        error = _error;
        return console.log('Error in ElpasedTime constructor (nbr) for ' + n + ', error: ' + error);
      }
    };

    ElapsedTime.prototype.initialize_from_string = function(s) {
      var error, tokens;
      try {
        tokens = s.split(':');
        if (tokens.length === 3) {
          this.hh = parseInt(tokens[0], 10);
          this.mm = parseInt(tokens[1], 10);
          this.ss = parseInt(tokens[2], 10);
        } else if (tokens.length === 2) {
          this.mm = parseInt(tokens[0], 10);
          this.ss = parseInt(tokens[1], 10);
        } else if (tokens.length === 1) {
          this.ss = parseInt(tokens[0], 10);
        } else {
          this.ss = parseInt(s);
        }
        return this.secs = (this.hh * 3600) + (this.mm * 60) + this.ss;
      } catch (_error) {
        error = _error;
        return console.log('Error in ElpasedTime constructor (str) for ' + s + ', error: ' + error);
      }
    };

    ElapsedTime.prototype.seconds = function() {
      return this.secs;
    };

    ElapsedTime.prototype.hours = function() {
      return this.secs / M26.SECONDS_PER_HOUR;
    };

    ElapsedTime.prototype.as_hhmmss = function() {
      this.ss = parseInt(this.ss);
      return '' + this.zero_pad(this.hh) + ':' + this.zero_pad(this.mm) + ':' + this.zero_pad(this.ss);
    };

    ElapsedTime.prototype.zero_pad = function(n) {
      if (n == null) {
        n = 0;
      }
      if (n < 10) {
        return '0' + n;
      } else {
        return '' + n;
      }
    };

    return ElapsedTime;

  })();

  Speed = (function() {
    function Speed(d, et) {
      var _ref;
      _ref = [d, et], this.d = _ref[0], this.et = _ref[1];
    }

    Speed.prototype.mph = function() {
      return this.d.as_miles() / this.et.hours();
    };

    Speed.prototype.kph = function() {
      return this.d.as_kilometers() / this.et.hours();
    };

    Speed.prototype.yph = function() {
      return this.d.as_yards() / this.et.hours();
    };

    Speed.prototype.pace_per_mile = function() {
      var mm, spm, ss;
      spm = this.seconds_per_mile();
      mm = Math.floor(spm / 60.0);
      ss = spm - (mm * 60);
      if (ss < 10) {
        ss = '0' + ss;
      } else {
        ss = '' + ss;
      }
      if (ss.length > 5) {
        ss = ss.substring(0, 5);
      }
      return '' + mm + ':' + ss;
    };

    Speed.prototype.seconds_per_mile = function() {
      return this.et.secs / this.d.as_miles();
    };

    Speed.prototype.projected_time = function(another_distance, algorithm) {
      var d1, d2, et, secs, t1, t2;
      if (algorithm == null) {
        algorithm = 'simple';
      }
      if (algorithm === 'riegel') {
        t1 = this.et.secs;
        d1 = this.d.as_miles();
        d2 = another_distance.as_miles();
        t2 = t1 * Math.pow(d2 / d1, 1.06);
        et = new ElapsedTime(t2);
        return et.as_hhmmss();
      } else {
        secs = this.seconds_per_mile() * another_distance.as_miles();
        et = new ElapsedTime(secs);
        return et.as_hhmmss();
      }
      return end;
    };

    return Speed;

  })();

  root.M26 = M26;

  root.Distance = Distance;

  root.ElapsedTime = ElapsedTime;

  root.Speed = Speed;

}).call(this);
