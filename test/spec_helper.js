(function() {
  beforeEach(function() {
    return jasmine.Expectation.addMatchers({
      is11: function() {
        return {
          compare: function(actual) {
            if (actual === 11) {
              return {
                pass: true,
                message: ''
              };
            } else {
              return {
                pass: false,
                message: '' + actual + ' is not 11'
              };
            }
          }
        };
      },
      isWithin: function(tolerance, expected) {
        return {
          compare: function(actual, tolerance, expected) {
            var max, min;
            this.pass = true;
            this.msg = 'Ok';
            min = expected - tolerance;
            max = expected + tolerance;
            this.data = {
              'actual': actual,
              'expected': expected,
              'tolerance': tolerance,
              'min': min,
              'max': max
            };
            if (false) {
              console.log('data: ' + JSON.stringify(this.data));
            }
            if (actual > max) {
              this.pass = false;
              this.msg = 'value is too large; expected ' + expected + ' but got ' + actual;
            }
            if (actual < min) {
              this.pass = false;
              this.msg = 'value is too small; expected ' + expected + ' but got ' + actual;
            }
            if (!pass) {
              console.log('failed: ' + JSON.stringify(this.data));
            }
            return {
              pass: this.pass,
              message: this.msg
            };
          }
        };
      }
    });
  });

}).call(this);
