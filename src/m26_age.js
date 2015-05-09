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
