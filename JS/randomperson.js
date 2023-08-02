//idea is to pull a random string from an array, to determine who will buy lunch. 
var enviRonniMent = ["Povi", "Jacob", "Tobias", "Oliver"];

function whollPay(names){
  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition];
   return randomPerson + " is going to buy lunch today!";
}
whollPay(enviRonniMent)


