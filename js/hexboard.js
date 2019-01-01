/** A rectangular hex field playing board */

(function () {
  
  HexBoard = function ( columns, rows ) {
    let me = this;
    me.columns = columns;
    me.rows = rows;
  };

  HexBoard.prototype.draw = function ( context, x, y, width, height ) {
    
    let me = this, 
      rows = me.rows, 
      columns = me.columns,
      canvas = new Canvas( context );

    let sideH = 2 * Math.floor( height / ( rows * 3 + 1 ) );
    let halfCellWidth = ( width / columns ) / 2;
    let sideW = Math.floor( halfCellWidth * Math.sinDegrees( 90 ) / Math.sinDegrees( 60 ) );
    let side = Math.min( sideH, sideW );

    for( let row = 0; row < rows; row++ ) {
      for( let column = 0; column < columns; column++ ) {
        if( row % 2 != 0 || column < columns - 1 ) {
          let hex = new Hexagon( column, row, side );
          context.fillStyle = 'lightgray';
          hex.draw( context, true, true, x, y );
          context.fillStyle = 'gray';
          //canvas.drawCircle( hex.leftX + hex.center.x, hex.topY + hex.center.y, 0.6 * size, true, true );
        }
      }
    }

  };

}());
