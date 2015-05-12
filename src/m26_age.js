// Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>
/// <reference path="../typings/node/node.d.ts" />
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
    M26Age.prototype.training_zones = function () {
        var zones = [0.95, 0.90, 0.85, 0.80, 0.75];
        var values = [];
        var max = this.max_pulse();
        for (var i = 0; i < zones.length; i++) {
            var pct = zones[i];
            var obj = {};
            obj['zone'] = i + 1;
            obj['age'] = this.val();
            obj['max'] = max;
            obj['pct_max'] = pct;
            obj['pulse'] = Math.round(max * pct);
            values.push(obj);
        }
        return values;
    };
    //training_zones: ->
    //results = []
    //zones   = [ 0.95, 0.90, 0.85, 0.80, 0.75 ]
    //max     = this.max_pulse()
    //for pct, idx in zones
    //tuple      = {}
    //tuple.zone = idx + 1
    //tuple.age  = this.val()
    //tuple.max  = max
    //tuple.pct_max = pct
    //tuple.pulse   = Math.round(max * pct)
    //results.push(tuple)
    //results
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
