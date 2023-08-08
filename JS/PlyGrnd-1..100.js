//for-loop generate 1-100
function arrPush(){
    var arr = [];
    for (i=1;i<101;i++){
      arr.push(i);
    }
      console.log(arr)
    }
    arrPush()
//while-loop generate 1-100 
    function pushArr(){
      var array = [];
      var a = 0;
    while (a<100){
      array.push(a);
      a++;
    }
      return(array);
    }
    pushArr()
//if-statement generating 1-100 automatically is not possible because it's not a loop
    function ifPushA(){
      var A = [];
      var b = 0;
      if (b<=100){
        b++
        A.push(b)
      }
      return(A)
    }
    ifPushA()