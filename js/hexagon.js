/** Utilities for drawing */

(function () {
  
  Hexagon = function ( x, y, side ) {
    let me = this;
    me.x = x;
    me.y = y;
    me.side = side;
    me.middle = Math.floor( me.side * Math.sinDegrees( 60 ) );
    me.halfside = Math.floor( me.side / 2 );
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
    me.diag = {
      x: Math.floor( me.middle * Math.cosDegrees( 60 ) ),
      y: Math.floor( me.middle * Math.sinDegrees( 60 ) )
    }
  };

  Hexagon.prototype.draw = function ( context, border, fill, offsetX, offsetY ) {
    
    let me = this;
    let c = context;
    let p = me.points;
    let x = me.leftX + offsetX;
    let y = me.topY + offsetY;

    c.beginPath();
    c.moveTo( x + p[ 0 ][ 0 ], y + p[ 0 ][ 1 ] );
    for( let i = 1; i < 6; i++ ) {
      c.lineTo( x + p[ i ][ 0 ], y + p[ i ][ 1 ] );
    }
    c.closePath();

    if( fill ) {
      c.fill();
    }

    if( border ) {
      c.stroke();
    }

  };

}());
