// Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>
var Age = (function () {
    function Age(n) {
        // instance variables
        this.value = 0;
        this.value = parseFloat(n);
    }
    Age.prototype.val = function () {
        return this.value;
    };
    Age.prototype.max_pulse = function () {
        if (this.value <= 20) {
            return 200.0;
        }
        else {
            return 220.0 - this.value;
        }
    };
    Age.prototype.add = function (another_instance) {
        if (another_instance) {
            this.value = this.value + another_instance.value;
        }
    };
    Age.prototype.subtract = function (another_instance) {
        if (another_instance) {
            this.value = this.value - another_instance.value;
        }
    };
    Age.prototype.populated = function (obj) {
        if (obj === undefined) {
            return false;
        }
        if (obj === null) {
            return false;
        }
        return true;
    };
    return Age;
})();
exports.Age = Age;
//# sourceMappingURL=age.js.map