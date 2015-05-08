// Copyright 2015, Christopher Joakim <christopher.joakim@gmail.com>
var m26;
(function (m26) {
    var M26Age = (function () {
        function M26Age(n) {
            // instance variables
            this.value = 0;
            this.value = parseFloat(n);
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
                this.value = this.value + another_instance.value;
            }
        };
        M26Age.prototype.subtract = function (another_instance) {
            if (another_instance) {
                this.value = this.value - another_instance.value;
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
    m26.M26Age = M26Age;
})(m26 || (m26 = {}));
