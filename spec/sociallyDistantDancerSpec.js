describe('sociallyDistantDancer', function() {
  var sociallyDistantDancer, clock, dummyDancer;
  var timeBetweenSteps = 100;
  window.dancers = [];

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    sociallyDistantDancer = makeSociallyDistantDancer(100, 200, timeBetweenSteps);
    window.dancers.push(sociallyDistantDancer);
  });

  describe('dancing solo', function() {
    it('should not move if it is the only one created', function() {
      let originalPositionTop = sociallyDistantDancer.top;
      let originalPositionLeft = sociallyDistantDancer.left;
      clock.tick(timeBetweenSteps);
      expect(originalPositionTop).to.equal(sociallyDistantDancer.top);
      expect(originalPositionLeft).to.equal(sociallyDistantDancer.left);
    });
  });

  describe('dancing away from others', function() {
    it('should move away from the closest dancer', function() {
      let staticDancer = makeDancer(105, 205, timeBetweenSteps);
      window.dancers.push(staticDancer);
      sinon.spy(sociallyDistantDancer, 'step');
      let originalDistance = Math.sqrt( Math.pow((staticDancer.top - sociallyDistantDancer.top), 2) + Math.pow((staticDancer.left - sociallyDistantDancer.left), 2) );
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      let finalDistance = Math.sqrt( Math.pow((staticDancer.top - sociallyDistantDancer.top), 2) + Math.pow((staticDancer.left - sociallyDistantDancer.left), 2) );
      expect(finalDistance).to.be.greaterThan(originalDistance);
    });
  });

  describe('dance', function() {
    it('should change position at least once per second', function() {
      sinon.spy(sociallyDistantDancer, 'step');
      let originalPosition = sociallyDistantDancer.top;

      clock.tick(timeBetweenSteps);
      expect(sociallyDistantDancer.top).to.not.equal(originalPosition);
    });
  });

});