
var Paddle = function() {
  var image = imageFromPath('paddle.png')

  var o = {
    image: image,
    x: 100,
    y: 250,
    speed: 5,
  }
  o.moveLeft = function() {
    this.x -= this.speed
    if (this.x < 0) {
      this.x = 0;
    }
  }
  o.moveRight = function() {
    this.x += this.speed
    if (this.x + this.image.width > 400) {
      this.x = 400 - this.image.width;
    }
  }

  o.collide = function(ball) {
    return realCollide(o, ball) || realCollide(ball, o);
    // return false
  }
  return o
}
