describe('wigglyDancer', function() {
  var wigglyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    wigglyDancer = makewigglyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(wigglyDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should change position at least once per second', function() {
      sinon.spy(wigglyDancer, 'step');
      expect(wigglyDancer.step.callCount).to.be.equal(0);
      let originalPosition = wigglyDancer.left;

      clock.tick(timeBetweenSteps);
      expect(wigglyDancer.left).to.not.equal(originalPosition);
    });
  });

});