var makeSociallyDistantDancer = function(top, left, timeBetweenSteps) {
  return new SociallyDistantDancer(top, left, timeBetweenSteps);
};

var SociallyDistantDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('sociallyDistantDancer');
  this.isUp = false;
  this.increment = Math.random() * 20;
  this.$node.prepend('<img class="dancerHead" src=/images/socially_distant.png />');
};

SociallyDistantDancer.prototype = Object.create(Dancer.prototype);
SociallyDistantDancer.prototype.constructor = SociallyDistantDancer;

SociallyDistantDancer.prototype.oldStep = function() {
  Dancer.prototype.step.call(this);
};

SociallyDistantDancer.prototype.step = function() {
  let newTop, newLeft;
  this.oldStep();
  let distances = [];
  for (let i = 0; i < window.dancers.length; i++) {
    // debugger;
    let otherDancer = window.dancers[i];
    let distance = Math.sqrt( Math.pow((otherDancer.top - this.top), 2) + Math.pow((otherDancer.left - this.left), 2) );
    if (distance) {
      distances.push(distance);
    }
  }
  // find closest otherdancer
  let idxOfClosest = distances.indexOf(Math.min(...distances));
  // debugger;
  let closestDancer = window.dancers[idxOfClosest];
  debugger;
  if (window.dancers.length !== 1) {
    // move thisdancer in the opposite direction
    if (this.top - closestDancer.top < 0 ) {
      newTop = this.top - 10;
    } else {
      newTop = this.top + 10;
    }
    if (this.left - closestDancer.left < 0 ) {
      newLeft = this.left - 10;
    } else {
      newLeft = this.left + 10;
    }
    if (newTop > 0 && newTop < $('body').height() && newLeft > 0 && newLeft < $('body').width()) {
      this.setPosition(newTop, newLeft);
    } else {
      this.setPosition(this.top, this.left);
    }
  }
};
