//idea is the fibonacci generator taking an input of desired number of numbers in the sequence.

function fibonacciGenerator (n) {
    var array = [0];
    for (var i=1; i < n; i++){
      if (i===1){
        array.push(i);
      } else {
          array.push(array[i-1]+array[i-2]);
        }
}
  return(array)
}
fibonacciGenerator(4)