/** Utilities for drawinh hexagons and hex grids */

(function () {
  
  Hexagon = function ( x, y, side ) {
    let me = this;
    me.x = x;
    me.y = y;
    me.side = side;
    me.middle = me.side * Math.sin( 60 * Math.PI / 180 );
    me.halfside = me.side / 2;
    me.width = 2 * me.middle;
    me.height = 2 * me.side;
    me.points = [ 
      [ me.middle, 0 ], 
      [ me.width, me.halfside ], 
      [ me.width, me.halfside + me.side ],
      [ me.middle, me.height ],
      [ 0, me.halfside + me.side ],
      [ 0, me.halfside ]
    ];
    me.center = {
      x: me.middle,
      y: me.height / 2
    };
    me.topY = y * 1.5 * me.side;
    me.leftX = x * me.width;
    if( y % 2 == 0 ) {
      me.leftX += me.middle;
    }
  };

  /*
  var privateMethod = function (x) {
      if (this.bar === 999) {
          this.bar = x;
      }
  };
  */

  Hexagon.prototype.draw = function ( context, fill, border ) {
    
    let me = this;
    //let c = new Canvas( context );
    let c = context;
    let p = me.points;
    let x = me.leftX;
    let y = me.topY;

    c.beginPath();
    c.moveTo( x + p[ 0 ][ 0 ], y + p[ 0 ][ 1 ] );
    c.lineTo( x + p[ 1 ][ 0 ], y + p[ 1 ][ 1 ] );
    c.lineTo( x + p[ 2 ][ 0 ], y + p[ 2 ][ 1 ] );
    c.lineTo( x + p[ 3 ][ 0 ], y + p[ 3 ][ 1 ] );
    c.lineTo( x + p[ 4 ][ 0 ], y + p[ 4 ][ 1 ] );
    c.lineTo( x + p[ 5 ][ 0 ], y + p[ 5 ][ 1 ] );
    //c.lineTo( x + p[ 0 ][ 0 ], y + p[ 0 ][ 1 ] );
    c.closePath();

    if( fill ) {
      c.fill();
    }

    if( border ) {
      c.stroke();
    }
    
    /*
    for( let i = 0; i < 5; i++ ) {
      c.drawLine( x + p[ i ][ 0 ], y + p[ i ][ 1 ], x + p[ i + 1 ][ 0 ], y + p[ i + 1 ][ 1 ] );
    }
    c.drawLine( x + p[ 5 ][ 0 ], y + p[ 5 ][ 1 ], x + p[ 0 ][ 0 ], y + p[ 0 ][ 1 ] );
    */

};

}());
