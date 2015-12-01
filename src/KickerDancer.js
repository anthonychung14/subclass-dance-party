var KickerDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps * 0.1);
  //saving top and left so we can edit them
  /*this.top = top;
  this.left = left;*/
  this.state = 0;
  this.bool = true;
  this.$node.addClass("kicker");
  
};

KickerDancer.prototype = Object.create(Dancer.prototype);
KickerDancer.prototype.constructor = KickerDancer;
KickerDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
    //Change this.setPosition

  if (this.bool){
    this.$node.animate({ "left": "+=150px" }, "slow" );
    //edit this.top and this.left
    //this.left += 15;
    //call setPosition
    //this.setPosition(this.top, this.left);
    //this.state ++;
    //if (this.state === 10){
      this.bool = false;
    //}
  } else {
    this.$node.animate({ "left": "-=150px" }, "slow" );
    //this.left -= 15;
    //this.setPosition(this.top, this.left);
    //this.state --;
    //if(this.state === 0){
      this.bool = true;
    //}
  }
};  
