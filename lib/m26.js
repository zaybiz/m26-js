// Copyright 2015, Christopher Joakim <christopher.joakim  static gmail.com>
/// <reference path="../typings/node/node.d.ts" />

var M26Constants = (function () {
    function M26Constants() {
    }
    // class variables
    M26Constants.VERSION = '0.3.0';
    M26Constants.UOM_MILES = 'm';
    M26Constants.UOM_KILOMETERS = 'k';
    M26Constants.UOM_YARDS = 'y';
    M26Constants.UNITS_OF_MEASURE = [M26Constants.UOM_MILES, M26Constants.UOM_KILOMETERS, M26Constants.UOM_YARDS];
    M26Constants.KILOMETERS_PER_MILE = 1.609344;
    M26Constants.MILES_PER_KILOMETER = 0.621371192237334;
    M26Constants.YARDS_PER_KILOMETER = 1093.6132983377076;
    M26Constants.FEET_PER_KILOMETER = 3280.839895013123;
    M26Constants.FEET_PER_METER = 3.280839895013123;
    M26Constants.YARDS_PER_MILE = 1760.0;
    M26Constants.SECONDS_PER_HOUR = 3600.0;
    return M26Constants;
})();
exports.M26Constants = M26Constants;

var M26Age = (function () {
    function M26Age(n) {
        // instance variables
        this.value = 0;
        if (n && typeof n == "number") {
            this.value = n;
        }
        if (n && typeof n == "string") {
            this.value = parseFloat(n);
        }
    }
    M26Age.prototype.val = function () {
        return this.value;
    };
    M26Age.prototype.max_pulse = function () {
        if (this.value <= 20) {
            return 200.0;
        }
        else {
            return 220.0 - this.value;
        }
    };
    M26Age.prototype.add = function (another_instance) {
        if (another_instance) {
            return this.value + another_instance.value;
        }
    };
    M26Age.prototype.subtract = function (another_instance) {
        if (another_instance) {
            return this.value - another_instance.value;
        }
    };
    M26Age.prototype.populated = function (obj) {
        if (obj === undefined) {
            return false;
        }
        if (obj === null) {
            return false;
        }
        return true;
    };
    return M26Age;
})();
exports.M26Age = M26Age;

var M26Distance = (function () {
    function M26Distance(num, unit) {
        if (unit === void 0) { unit = M26Constants.UOM_MILES; }
        // instance variables
        this.value = 0;
        this.uom = M26Constants.UOM_MILES;
        this.value = num;
        this.uom = ('' + unit).trim();
    }
    M26Distance.prototype.as_miles = function () {
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
    };
    M26Distance.prototype.as_kilometers = function () {
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
    };
    M26Distance.prototype.as_yards = function () {
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
    };
    M26Distance.prototype.add = function (another_instance) {
        if (this.populated(another_instance)) {
            var m1 = this.as_miles();
            var m2 = another_instance.as_miles();
            return new M26Distance(m1 + m2);
        }
        else {
            return new M26Distance(this.as_miles());
        }
    };
    M26Distance.prototype.subtract = function (another_instance) {
        if (this.populated(another_instance)) {
            var m1 = this.as_miles();
            var m2 = another_instance.as_miles();
            return new M26Distance(m1 - m2);
        }
        else {
            return new M26Distance(this.as_miles());
        }
    };
    M26Distance.prototype.populated = function (obj) {
        if (obj === undefined) {
            return false;
        }
        if (obj === null) {
            return false;
        }
        return true;
    };
    return M26Distance;
})();
exports.M26Distance = M26Distance;

var M26ElapsedTime = (function () {
    function M26ElapsedTime(n) {
        // instance variables
        this.hh = 0;
        this.mm = 0;
        this.ss = 0;
        this.secs = 0.0;
        if (n && typeof n == "number") {
            this.initialize_from_number(n);
        }
        if (n && typeof n == "string") {
            this.initialize_from_string(n);
        }
    }
    M26ElapsedTime.prototype.hours = function () {
        return this.secs / M26Constants.SECONDS_PER_HOUR;
    };
    M26ElapsedTime.prototype.as_hhmmss = function () {
        var h = this.zero_pad(this.hh);
        var m = this.zero_pad(this.mm);
        var s = this.zero_pad(this.ss);
        return h + ':' + m + ':' + s;
    };
    M26ElapsedTime.prototype.initialize_from_number = function (n) {
        this.secs = n;
        this.hh = Math.floor(this.secs / M26Constants.SECONDS_PER_HOUR);
        var rem = this.secs - (this.hh * M26Constants.SECONDS_PER_HOUR);
        this.mm = Math.floor(rem / 60.0);
        this.ss = rem - (this.mm * 60.0);
    };
    M26ElapsedTime.prototype.initialize_from_string = function (n) {
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
    };
    M26ElapsedTime.prototype.zero_pad = function (n) {
        if (n < 10) {
            return '0' + n;
        }
        else {
            return '' + n;
        }
    };
    return M26ElapsedTime;
})();
exports.M26ElapsedTime = M26ElapsedTime;

var M26Speed = (function () {
    function M26Speed(dist, etime) {
        this.dist = dist;
        this.etime = etime;
    }
    M26Speed.prototype.mph = function () {
        return this.dist.as_miles() / this.etime.hours();
    };
    M26Speed.prototype.kph = function () {
        return this.dist.as_kilometers() / this.etime.hours();
    };
    M26Speed.prototype.yph = function () {
        return this.dist.as_yards() / this.etime.hours();
    };
    M26Speed.prototype.seconds_per_mile = function () {
        return this.etime.secs / this.dist.as_miles();
    };
    M26Speed.prototype.pace_per_mile = function () {
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
    };
    M26Speed.prototype.age_graded = function (event_age, graded_age) {
        var ag_factor = event_age.max_pulse() / graded_age.max_pulse();
        var event_secs = this.etime.secs;
        var graded_secs = event_secs * ag_factor;
        var graded_etime = new M26ElapsedTime(graded_secs);
        return new M26Speed(this.dist, graded_etime);
    };
    M26Speed.prototype.projected_time = function (another_distance, algorithm) {
        if (algorithm === void 0) { algorithm = 'simple'; }
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
    };
    return M26Speed;
})();
exports.M26Speed = M26Speed;
