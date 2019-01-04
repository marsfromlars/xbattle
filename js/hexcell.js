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
    
    context.fillStyle = 'lightgray';
    hex.draw( context, true, true, boardOffsetX, boardOffsetY );
    context.fillStyle = '#aaaaaa';
    canvas.drawCircle( 
      boardOffsetX + hex.leftX + hex.center.x, 
      boardOffsetY + hex.topY + hex.center.y, 
      0.6 * sideLength, true, true );

  };

}());
