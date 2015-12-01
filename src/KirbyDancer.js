/*var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to ov  erwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  var oldStep = blinkyDancer.step;

  blinkyDancer.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};
*/
var KirbyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.state = true;
};
KirbyDancer.prototype = Object.create(Dancer.prototype);

KirbyDancer.prototype.constructor = KirbyDancer;
KirbyDancer.prototype.step = function(){
  /*var old = BlinkyDancer.prototype.step;
  old();
  */
  Dancer.prototype.step.call(this);
  if (this.state === true){
    //this.$node.removeClass("dancer");
    this.$node.removeClass("twoBlinkyDancerOne");
    this.$node.addClass("twoBlinkyDancerTwo");
  //  this.$node.toggle();
    this.state = false;
  } else {
    this.$node.removeClass("twoBlinkyDancerTwo");
    this.$node.addClass("twoBlinkyDancerOne");
//    this.$node.toggle();
    this.state = true;
  }

  //setTimeout(function(){this.$node.toggle()}, 0);
};


