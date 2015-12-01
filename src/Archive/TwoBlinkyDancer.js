var TwoBlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps)

  this.state = true;
  this.$node.addClass("twoBlinkyDancer");
  
}

TwoBlinkyDancer.prototype = Object.create(Dancer.prototype)
TwoBlinkyDancer.prototype.constructor = TwoBlinkyDancer;
TwoBlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
    //Change this.setPosition

  if (this.state === true){
    this.$node.animate({ "left": "+=50px" }, "slow" );
    this.state = false;
  } else {
    this.$node.animate({ "left": "-=50px" }, "slow" );
    this.state = true;
  }
};  
