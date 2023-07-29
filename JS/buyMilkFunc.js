function getMilk(money){
    var cost = 2.5;
    var change = money%cost;
    console.log("You can buy " + Math.floor(money/2.5) + " bottles for 10 bucks, and you'll get " + change + " bucks in change");
  }
  getMilk /*enter money amount*/ (12);