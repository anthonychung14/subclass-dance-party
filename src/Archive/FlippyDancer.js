var FlippyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.state = true;
  this.$node.addClass("kicker")
};
FlippyDancer.prototype = Object.create(Dancer.prototype)

FlippyDancer.prototype.constructor = FlippyDancer;
FlippyDancer.prototype.step = function(){
  /*var old = FlippyDancer.prototype.step;
  old();
  */
  
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
  //setTimeout(function(){this.$node.toggle()}, 0)
/*
<script>
$( "#right" ).click(function() {
  $( ".block" ).
});
 
$( "#left" ).click(function(){
  $( ".block" ).animate({ "left": "-=50px" }, "slow" );
});*/






//FlippDancer.setPosition() {
  //this.top = this.top + 5

  //change position back to original

