var KirbyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top =, left, timeBetweenSteps)
}

KirbyDancer.prototype = Object.create(Dancer.prototype)

KirbyDancer.prototype.constructor = BlinkyDancer;