
/**
 * Returns sinus based on degrees rather than radians
 * 
 * @param degrees Arc degrees
 * 
 */
Math.sinDegrees = function( degrees ) {
  return Math.sin( degrees * Math.PI / 180 );
}


