      var hydra = new Hydra({
        canvas: document.getElementById("myCanvas"),
        detectAudio: false,
        enableStreamCapture: false,
      })
osc(20, 0.01, 1.1)
	.kaleid(5)
	.color(2.83,0.91,0.39)
	.rotate(0, 0.1)
	.modulate(o0, () => mouse.x * 0.0003)
	.scale(1.01)
  	.out(o0)

