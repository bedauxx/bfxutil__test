let script = document.createElement( 'script' );
const
  tjs = 'https://rawgit.com/bedauxx/bfxutil__test/master/main.js' 
  cwa = '?_=' + ( new Date() ).getTime()
;
script.src = tjs + cwa;
document.body.appendChild( script );
