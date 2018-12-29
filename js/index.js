let canvas1 = document.getElementById( 'canvas1' );
let ctx = canvas1.getContext( '2d' );
ctx.strokeStyle = 'black';
ctx.lineWidth = 0.5;
ctx.translate( 0.5, 0.5 );

drawHexgrid( ctx, 10, 10, 10, 15, 20 );

/*
ctx.moveTo( 0, 0 );
ctx.lineTo( 100, 60 );
ctx.stroke();
*/
