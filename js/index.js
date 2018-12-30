let canvas1 = document.getElementById( 'canvas1' );
let ctx = canvas1.getContext( '2d' );
ctx.strokeStyle = 'black';
ctx.lineWidth = 0.5;
ctx.translate( 0.5, 0.5 );

let c = new Canvas( ctx );

let marginLeft = 10;
let marginTop = 10;
let width = 10;
let height = 15;
let size = 20;

//drawHexgrid( ctx, marginLeft, marginTop, width, height, size );

for( let y = 0; y < height; y++ ) {
  for( let x = 0; x < width; x++ ) {
    if( y % 2 != 0 || x < width - 1 ) {
      let hex = new Hexagon( x, y, size );
      hex.draw( ctx );
      c.drawCircle( hex.leftX + hex.center.x, hex.topY + hex.center.y, 0.6 * size, true );
    }
  }
}

/*
ctx.moveTo( 0, 0 );
ctx.lineTo( 100, 60 );
ctx.stroke();
*/

//c.drawCircle( 50, 50, 50, true );

/*
let hex = hexagon( size );
for( let y = 0; y < height; y++ ) {
  for( let x = 0; x < width; x++ ) {
    let pos = hexgrid( x, y, size );
    c.drawCircle( marginLeft + hex.center[ 0 ] + pos[ 0 ], marginTop + hex.center[ 1 ] + pos[ 1 ], size - 5, false );
  }
}
*/