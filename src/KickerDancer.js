var KickerDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps)

  this.state = true;
  this.$node.addClass("kicker");
  
}

KickerDancer.prototype = Object.create(Dancer.prototype)
KickerDancer.prototype.constructor = KickerDancer;
KickerDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
    //Change this.setPosition

  if (this.state === true){
    this.$node.animate({ "left": "+=150px" }, "slow" );
    this.state = false;
  } else {
    this.$node.animate({ "left": "-=150px" }, "slow" );
    this.state = true;
  }
};  
