//idea is to input an amount of money and get amount of bottles dividing the money by bottle price, and also get change at the end.
function getMilk(money){
    var cost = 2.5;
    var change = money%cost;
    console.log("You can buy " + Math.floor(money/2.5) + " bottles for 10 bucks, and you'll get " + change + " bucks in change");
  }
  getMilk /*enter money amount*/ (12);