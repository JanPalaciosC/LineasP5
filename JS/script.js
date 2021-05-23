let cuadro1, cuadro2, cuadro3;

function setup(){
    createCanvas(windowWidth, windowHeight);

    cuadro1 = createGraphics(500, 500);
    cuadro1.background('green');

    image(cuadro1,0,0,250,250);

    cuadro2 = createGraphics(500, 500);
    cuadro2.background('red');

    image(cuadro2,250,0,250,250);
    cuadro3 = createGraphics(500, 500);
    cuadro3.background('purple');
    image(cuadro3,500,0,250,250);

   
}

function draw(){

    stroke("red")
    ecuPP(125, 0, 125, 250);
    ecuPP(0, 125, 250, 125);
    ecuPP(0, 0, 250, 250);
    ecuPP(0, 250, 250, 0);

    stroke("blue");
    DDA(375, 0, 375, 250);
    DDA(250, 125, 500, 125);
    DDA(250, 0, 500, 250);
    DDA(250, 250, 500, 0);

    stroke("green");
    Bresenham(625, 0, 625, 250);
    Bresenham(500, 125, 750, 125);
    Bresenham(500, 0, 750, 250);
    Bresenham(500, 250, 750, 0);

    
    
    
}

function ecuPP(x1, y1, x2, y2){
        let x = x1,
        y = y1,
        stepX = 1,
        stepY = 1;
    const dx = x2 - x1;
    const dy = y2 - y1;

    if (dx == 0) {
        if (dy < 0) stepY = -1;
        while (y !== y2) {
        point(x, y);
        y += stepY;
        }
    } else {
        const m = dy / dx;
        const b = y1 - m * x1;
        if (dx < 0) stepX = -1;
        while (x !== x2) {
        point(x, y);
        x += stepX;
        y = m * x + b;
        }
    }
}


function DDA(x1, y1, x2, y2){
    let x = x1,
      y = y1,
      dx = x2 - x1,
      dy = y2 - y1;
  
    const m = Math.abs(dx) > Math.abs(dy) ? Math.abs(dx) : Math.abs(dy);
    const xIncrement = dx / m;
    const yIncrement = dy / m;
  
    for (let i = 0; i < m; i++) {
      x += xIncrement;
      y += yIncrement;
      point(x, y);
    }
}


function Bresenham(x1, y1, x2, y2){
    let x = x1;
      let y = y1;
      let dx = x2 - x1;
      let dy = y2 - y1;
      let sx = 1;
      let sy = 1;
  
      if (dy < 0) {
        dy = -dy;
        sy = -1;
      }
      if (dx < 0) {
        dx = -dx;
        sx = -1;
      }
  
      if (dx > dy) {
        let p = 2 * dy - dx;
        while (x != x2) {
          point(x, y);
          x += sx;
          if (p < 0) {
            p += 2 * dy;
          } else {
            y += sy;
            p += 2 * (dy - dx);
          }
        }
      } else {
        let p = 2 * dx - dy;
        while (y != y2) {
          point(x, y);
          y += sy;
          if (p < 0) {
            p += 2 * dx;
          } else {
            x += sx;
            p += 2 * (dx - dy);
          }
        }
      }
  }
    
    