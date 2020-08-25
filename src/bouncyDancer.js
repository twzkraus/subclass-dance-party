var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  return new BouncyDancer(top, left, timeBetweenSteps);
};

var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncyDancer');
  this.isUp = false;
  this.increment = Math.random() * 20;

  $('.bouncyDancer').mouseover(function() {
    $('.bouncyDancer').css('border-width', '30px');
  });

  $('.bouncyDancer').mouseout(function() {
    $('.bouncyDancer').css('border-width', '50px');
  });
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.oldStep = function() {
  Dancer.prototype.step.call(this);
};

BouncyDancer.prototype.step = function() {
  this.oldStep();
  if (this.isUp) {
    this.setPosition(this.top + this.increment, this.left);
  } else {
    this.setPosition(this.top - this.increment, this.left);
  }
  this.isUp = !this.isUp;
};
