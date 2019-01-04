/** A rectangular hex field playing board */

(function () {
  
  HexCell = function( status ) {
    let me = this;
    me.status = status;
  };

  HexCell.prototype.draw = function ( context, boardOffsetX, boardOffsetY, sideLength ) {
    
    let me = this,
      s = me.status;
      
    let canvas = new Canvas( context );
    let hex = new Hexagon( s.column, s.row, sideLength );
    
    // draw hexagon
    context.fillStyle = 'lightgray';
    hex.draw( context, true, true, boardOffsetX, boardOffsetY );

    // draw roads
    let x = boardOffsetX + hex.leftX + hex.center.x;
    let y = boardOffsetY + hex.topY + hex.center.y;

    canvas.drawLine( x, y, x - hex.diag.x, y - hex.diag.y );
    canvas.drawLine( x, y, x + hex.diag.x, y - hex.diag.y );
    canvas.drawLine( x, y, x + hex.middle, y );
    canvas.drawLine( x, y, x - hex.diag.x, y + hex.diag.y );
    canvas.drawLine( x, y, x + hex.diag.x, y + hex.diag.y );
    canvas.drawLine( x, y, x - hex.middle, y );
  
    if( status.northWest ) {

    }

    context.fillStyle = '#aaaaaa';
    canvas.drawCircle( 
      boardOffsetX + hex.leftX + hex.center.x, 
      boardOffsetY + hex.topY + hex.center.y, 
      0.6 * sideLength, false, true );

    context.save();
    context.lineWidth = 2;
    canvas.drawCircle( 
      boardOffsetX + hex.leftX + hex.center.x, 
      boardOffsetY + hex.topY + hex.center.y, 
      0.6 * sideLength, true, false );
    context.restore();

    };

}());
