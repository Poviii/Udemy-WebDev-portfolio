//idea is a Body Mass Index calculator using a formula, and a weight and height input. Depending on the BMI get a corresponding output message.
function bmiCalculator (weight, height) {
    var bmi = Math.round(weight / Math.pow(height, 2));
    return bmi;
}

bmiCalculator(88, 1.8);

 if (bmi < 18.5) {
     return("Your BMI is " + bmi + ", so you are underweight.")
 }
 
 if (bmi >= 18.5 && bmi <= 24.9){
     return("Your BMI is " + bmi + ", so you have a normal weight.")
 }
 else {
     return("Your BMI is " + bmi + ", so you are overweight.")
 }