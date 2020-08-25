var makeDancer = function(top, left, timeBetweenSteps) {
  return new Dancer(top, left, timeBetweenSteps);
};

// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  // this.$node.prepend('<img src="https://img.apmcdn.org/768cb350c59023919f564341090e3eea4970388c/normal/5034f3-20180309-rick-astley.jpg"/>');

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  Dancer.prototype.step.call(this);

  $('.dancer').mouseover(function() {
    $('.dancer').css('border-width', '30px');
  });

};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.top = top;
  this.left = left;
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};
