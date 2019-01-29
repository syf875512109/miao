
var Block = function(position) {

  let p = position

  var image = imageFromPath('block.png')
  var o = {
    image: image,
    x: p[0],
    y: p[1],
    alive: true,
    lifes: p[2] || 1,
  }

  o.collide = function(b) {
    return realCollide(o, b) || realCollide(b, o)
  }
  return o
}
