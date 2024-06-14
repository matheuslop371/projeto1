function setup() {
    createCanvas(850,850);
       background("purple");
    
  }
  
  function draw() {
    
    stroke("pink");
    fill("green");
    
    if(mouseIsPressed){
      rect(mouseX, mouseY, 10, 10);
    }
  }