describe('bouncyDancer', function() {
  var bouncyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = makeBouncyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should change position at least once per second', function() {
      sinon.spy(bouncyDancer, 'step');
      let originalPosition = bouncyDancer.top;

      clock.tick(timeBetweenSteps);
      expect(bouncyDancer.top).to.not.equal(originalPosition);
    });
  });

});