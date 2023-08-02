//idea is using conditions to determine if an inputed year is a leap year (366 days)
function isLeap(year) {
  
    if ((year % 4 === 0 && year % 100 === 0 && year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)){
        return year + " Leap year.";
    }
    
    else {
        return year + " Not leap year.";
    }
}
isLeap(2020)

//   OR

 function areLeap(year) {
        if (year % 4 === 0) {
            if (year % 100 === 0) {
                if (year % 400 === 0) {
                    return "Leap year."
                } else {
                    return "Not leap year."
                }
            } else {
                return "Leap year.";
            }
        } else {
            return "Not leap year.";
        }
}