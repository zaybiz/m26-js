var c = require('./m26_constants');
var M26Constants = c.M26Constants;
var M26ElapsedTime = (function () {
    function M26ElapsedTime(n) {
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
//# sourceMappingURL=m26_elapsed_time.js.map