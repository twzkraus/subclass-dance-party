var makeWigglyDancer = function(top, left, timeBetweenSteps) {
  return new WigglyDancer(top, left, timeBetweenSteps);
};

var WigglyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('wigglyDancer');
  this.isRight = false;
  this.increment = Math.random() * 20;
};

WigglyDancer.prototype = Object.create(Dancer.prototype);
WigglyDancer.prototype.constructor = WigglyDancer;

WigglyDancer.prototype.oldStep = function() {
  Dancer.prototype.step.call(this);
};

WigglyDancer.prototype.step = function() {
  this.oldStep();
  if (this.isRight) {
    this.setPosition(this.top, this.left + this.increment);
  } else {
    this.setPosition(this.top, this.left - this.increment);
  }
  this.isRight = !this.isRight;
};
