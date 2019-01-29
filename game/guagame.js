

 var guaGame = function(fps = 60) {
  var g = {
    actions: {},
    keydowns: {}
  }
  g.canvas = document.querySelector('#id-canvas')
  g.context = g.canvas.getContext('2d')

  //events
  window.addEventListener('keydown', function(event) {
    g.keydowns[event.key] = true;
  })
  window.addEventListener('keyup', function(event) {
    g.keydowns[event.key] = false;
  })

  
  g.registerAction = function(key, callback) {
    g.actions[key] = callback
  }

  // g.update = function() {}
  //clear
  g.clear = function() {
    g.context.clearRect(0, 0, g.canvas.width, g.canvas.height);
  }

  //draw
  // g.draw = function() {}
  g.drawImage = function(img) {
    g.context.drawImage(img.image, img.x, img.y)
  }
  //timer
  setInterval(function() {

    // events
    var actions = Object.keys(g.actions);
    for (let i = 0; i < actions.length; i++) {
      var key = actions[i]
      if (g.keydowns[key]) {
        g.actions[key]()
      }
    }

    //
    g.update()

    g.clear()

    g.draw()

  }, 1000 / fps)

  return g;
}
