let script = document.createElement( 'script' );
const
  tjs = './main.js' 
  cwa = '?_=' + ( new Date() ).getTime()
;
script.src = tjs + cwa;
document.body.appendChild( script );
