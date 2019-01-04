let canvas1 = document.getElementById( 'canvas1' );
let ctx = canvas1.getContext( '2d' );
ctx.strokeStyle = '#333333';
ctx.fillStyle = 'gray';
ctx.lineWidth = 0.5;
ctx.translate( 0.5, 0.5 );
//ctx.setTransform(1,0,0,1,0.5,0.5);

let canvas = new Canvas( ctx );

let marginLeft = 10;
let marginTop = 10;
let width = 10;
let height = 15;
let size = 20;
let border = 10;

let board = new HexBoard( 10, 15 );

let redraw = function() {
  let strokeStyle = ctx.strokeStyle;
  let lineWidth = ctx.lineWidth;
  canvas1.width = document.documentElement.clientWidth;
  canvas1.height = document.documentElement.clientHeight - canvas1.offsetTop;
  ctx.strokeStyle = strokeStyle;
  ctx.lineWidth = lineWidth;
  board.draw( ctx, border, border, canvas.getWidth() - 2 * border, canvas.getHeight() - 2 * border );
}

redraw();

window.addEventListener("resize", resizeCanvas, false);
 
function resizeCanvas(e) {
  redraw();
}