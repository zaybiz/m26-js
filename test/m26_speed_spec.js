(function() {
  describe('Speed', function() {
    it('calculates a 2-mile walk, with round numbers', function() {
      var d, s, t;
      d = new Distance(2.0);
      t = new ElapsedTime('30:00');
      s = new Speed(d, t);
      expect(s.mph()).isWithin(0.000001, 4);
      expect(s.kph()).isWithin(0.000001, 6.45161290324);
      expect(s.yph()).isWithin(0.000001, 7040);
      expect(s.seconds_per_mile()).isWithin(0.000001, 900);
      return expect(s.pace_per_mile()).toBe('15:00');
    });
    return it('calculates a marathon, with fractional numbers', function() {
      var d, s, t;
      d = new Distance(26.2);
      t = new ElapsedTime('03:47:30');
      s = new Speed(d, t);
      expect(s.mph()).isWithin(0.000001, 6.90989010989011);
      expect(s.kph()).isWithin(0.000001, 11.1449840482344);
      expect(s.yph()).isWithin(0.000001, 12161.4065934066);
      expect(s.seconds_per_mile()).isWithin(0.000001, 520.992366412214);
      return expect(s.pace_per_mile()).toBe('8:40.99');
    });
  });

}).call(this);
