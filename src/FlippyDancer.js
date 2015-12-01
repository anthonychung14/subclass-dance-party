var FlippyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
};
FlippyDancer.prototype = Object.create(Dancer.prototype)

FlippyDancer.prototype.constructor = FlippyDancer;
FlippyDancer.prototype.step = function(){
  /*var old = FlippyDancer.prototype.step;
  old();
  */
  Dancer.prototype.step.call(this);
  this.$node.toggle();

  //setTimeout(function(){this.$node.toggle()}, 0);
};
