(function() {
  describe('M26', function() {
    it('defines VERSION', function() {
      return expect(Constants.VERSION).toBe('0.1.2');
    });
    it('defines UOM_MILES', function() {
      return expect(Constants.UOM_MILES).toBe('m');
    });
    it('defines UOM_KILOMETERS', function() {
      return expect(Constants.UOM_KILOMETERS).toBe('k');
    });
    it('defines UOM_YARDS', function() {
      return expect(Constants.UOM_YARDS).toBe('y');
    });
    it('defines UNITS_OF_MEASURE', function() {
      return expect(Constants.UNITS_OF_MEASURE).toEqual(['m', 'k', 'y']);
    });
    it('defines KILOMETERS_PER_MILE', function() {
      return expect(Constants.KILOMETERS_PER_MILE).isWithin(0.000001, 1.61290322581);
    });
    it('defines YARDS_PER_MILE', function() {
      return expect(Constants.YARDS_PER_MILE).isWithin(0.000001, 1760.0);
    });
    it('defines MILES_PER_KILOMETER', function() {
      return expect(Constants.MILES_PER_KILOMETER).isWithin(0.000001, 0.62);
    });
    it('defines YARDS_PER_KILOMETER', function() {
      return expect(Constants.YARDS_PER_KILOMETER).isWithin(0.000001, 1091.2);
    });
    return it('defines SECONDS_PER_HOUR', function() {
      expect(Constants.SECONDS_PER_HOUR).toBeGreaterThan(3599.999);
      return expect(Constants.SECONDS_PER_HOUR).toBeLessThan(3600.001);
    });
  });

}).call(this);
