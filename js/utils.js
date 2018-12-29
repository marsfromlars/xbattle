let hexagon = function( side ) {
  let middle = side * Math.sin( 60 * Math.PI / 180 );
  let halfside = side / 2;
  let width = 2 * middle;
  let height = 2 * side;
  return {
    middle: middle,
    halfside: halfside,
    width: width,
    height: height,
    points: [ 
      [ middle, 0 ], 
      [ width, halfside ], 
      [ width, halfside + side ],
      [ middle, height ],
      [ 0, halfside + side ],
      [ 0, halfside ]
    ]
  }
};

let drawHexagon = function( ctx, hexagon, x, y ) {
  let p = hexagon.points;
  for( let i = 0; i < 5; i++ ) {
    drawLine( ctx, x + p[ i ][ 0 ], y + p[ i ][ 1 ], x + p[ i + 1 ][ 0 ], y + p[ i + 1 ][ 1 ] );
  }
  drawLine( ctx, x + p[ 5 ][ 0 ], y + p[ 5 ][ 1 ], x + p[ 0 ][ 0 ], y + p[ 0 ][ 1 ] );
};

let drawLine = function( ctx, x0, y0, x1, y1 ) {
  x0 = Math.round( x0 ); // + 0.5;
  x1 = Math.round( x1 ); // + 0.5;
  y0 = Math.round( y0 ); // + 0.5;
  y1 = Math.round( y1 ); // + 0.5;
  ctx.beginPath();
  ctx.moveTo( x0, y0 );
  ctx.lineTo( x1, y1 );
  ctx.stroke();
};

/**
 * Calculate position of hexagon at position x, y
 * 
 * @param x Hexagon at position x
 * @param y Hexagon at position y
 * @param side Side length of hexagon
 * 
 */
let hexgrid = function( x, y, side ) {
  let halfwidth = side * Math.sin( 60 * Math.PI / 180 );
  let x0 = x * 2 * halfwidth;
  let y0 = y * 1.5 * side;
  if( y % 2 != 0 ) {
    x0 += halfwidth;
  }
  return [ x0, y0 ];
};

let drawHexgrid = function( ctx, xStart, yStart, width, height, side ) {
  for( let y = 0; y < height; y++ ) {
    let x0 = 0;
    let w0 = width;
    if( y % 2 == 0 ) {
      x0++;
    }
    for( let x = x0; x < w0; x++ ) {
      let pos = hexgrid( x, y, side );
      let h = hexagon( side );
      drawHexagon( ctx, h, xStart - ( h.width / 2 ) + pos[ 0 ], yStart + pos[ 1 ] );
    }
  }
}
