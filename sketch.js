

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {

  background("#121254")
  rectMode (CENTER)
  //create a grid
  for(let x = 50; x < width; x += 50) {
    for (let y = 50; y < height; y += 50) {
    
//let color change when mouse is on a rect
      let distance = dist (mouseX, mouseY, x, y)
     if (distance < 25) {
       fill ("gold")
       stroke("white")
       strokeWeight (2)
       rectMode (CENTER)
       rect (x, y, 30, 40)
       noFill()
       rect (x-2.5, y-2.5, 25, 35)
     }

     else {
       fill ("#c0c0f2")
       stroke("black")
       rectMode (CENTER)
       rect (x, y, 30, 40)
       noFill()
       rect (x-2.5, y-2.5, 25, 35)
     }
    }
 

  }
  
}

