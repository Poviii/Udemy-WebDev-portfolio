//idea is a calculator that tells you how much time there is left taking a target number (/*->*/) and current age as input.
function lifeTime(age) {
    var months = (/*->*/90-age)* 12;
    var weeks = (/*->*/90-age)* 52;
    var days = (/*->*/90-age)* 365;
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.")
}
lifeTime(20)
    