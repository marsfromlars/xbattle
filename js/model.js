let canvas1 = document.getElementById( 'canvas1' );
let ctx = canvas1.getContext( '2d' );
ctx.strokeStyle = 'black';

let h1 = hexagon( 100 );
drawHexagon( ctx, h1, 50, 50 );
