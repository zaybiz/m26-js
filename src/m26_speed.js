// Copyright 2015, Christopher Joakim <christopher.joakim  static gmail.com>
/// <reference path="../typings/node/node.d.ts" />
/// <reference path="m26_constants.d.ts" />
/// <reference path="m26_distance.d.ts" />
/// <reference path="m26_elapsed_time.d.ts" />
var c = require('./m26_constants');
var d = require('./m26_distance');
var t = require('./m26_elapsed_time');
var M26Constants = c.M26Constants; // OMIT
var M26Distance = d.M26Distance; // OMIT
var M26ElapsedTime = t.M26ElapsedTime; // OMIT
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
    return M26Speed;
})();
exports.M26Speed = M26Speed;
