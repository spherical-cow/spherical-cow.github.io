(function(){

  var solution = 1;

  for (var a = 3 ; a < 9; a++ ){
    for (var b = 3 ; b < 9 ; b++ ){
      for (var c = 3 ; c < 9 ; c++ ){
        for (var d = 3 ; d < 9 ; d++ ){
          for (var e = 3 ; e < 9 ; e++ ){
            if (
              a != b &&
              a != c &&
              a != d &&
              a != e &&
              b != c &&
              b != d &&
              b != e &&
              c != d &&
              c != e &&
              d != e &&
              (a+b+c) == 19 &&
              (a+d+e) == 19
            ) {
              console.log('# -----------------------');
              console.log('# Solution ' + solution   );
              console.log('# -----------------------');
              console.log(' A: ' + a);
              console.log(' B: ' + b);
              console.log(' C: ' + c);
              console.log(' D: ' + d);
              console.log(' E: ' + e);
              console.log('\n\n\n')
            }
          }
        }
      }
    }
  }
})();