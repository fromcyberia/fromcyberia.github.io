      var hydra = new Hydra({
        canvas: document.getElementById("myCanvas"),
        detectAudio: false,
        enableStreamCapture: false,
      })

noise(3,0.1).thresh(0.5,0.04).out(o0)
   
p1 = new P5()
//write your own poem here
textArray = ["hay golpes en la vida", "tan fuertes", "yo no sé", "golpes como los del odio de dios"]


p1.draw = () => {
 if (p1.mouseIsPressed){
 p1.fill(p1.random(255),p1.random(255),p1.random(255));
 } else {
  p1.fill(p1.random(255),p1.random(255),p1.random(255));
  }
  p1.clear()
  index = Math.floor(time%textArray.length)
  p1.textSize(80)
  p1.stroke(p1.random(255),p1.random(255),p1.random(255));
  p1.strokeWeight(7.5)
  p1.textFont('Courier');
  p1.text(textArray[index],p1.mouseX,p1.mouseY)
}
