
var Ball = function() {
  var image = imageFromPath('ball.png')
  var o = {
    image: image,
    x: 50,
    y: 150,
    speedX: 5,
    speedY: 2,
    fired: false,
  }
  o.fire = function() {
    o.fired = true
  }
  o.stopFire = function() {
    o.fired = false
  }

  o.move = function() {
    if (o.fired) {
      o.x += this.speedX
      o.y += this.speedY
    }
    if (o.x + o.image.width > 400 || o.x < 0) {
      this.speedX *= -1
    }
    if (o.y < 0 || o.y + o.image.height > 300) {
      this.speedY *= -1
    }
  }
  return o
}
