/** Utilities for html canvas */

(function () {
  
  Canvas = function ( context ) {

    let me = this;
    me.context = context;

  };

  Canvas.prototype.getWidth = function() {
    return this.context.canvas.scrollWidth;
  }

  Canvas.prototype.getHeight = function() {
    return this.context.canvas.scrollHeight;
  }

  /*
  var privateMethod = function (x) {
      if (this.bar === 999) {
          this.bar = x;
      }
  };
  */

  Canvas.prototype.drawCircle = function ( x, y, r, border, fill ) {
    var me = this, context = me.context;
    context.beginPath();
    context.arc( x, y, r, 0, 2 * Math.PI );
    if( border ) {
      context.stroke();
    }
    if( fill ) {
      context.fill();
    }
  };

  Canvas.prototype.drawLine = function ( x0, y0, x1, y1 ) {
    var me = this, context = me.context;
    x0 = Math.round( x0 );
    x1 = Math.round( x1 );
    y0 = Math.round( y0 );
    y1 = Math.round( y1 );
    ctx.beginPath();
    ctx.moveTo( x0, y0 );
    ctx.lineTo( x1, y1 );
    ctx.stroke();
  };

}());
