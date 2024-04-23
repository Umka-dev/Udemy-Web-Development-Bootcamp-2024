var weight = prompt("What is your weight in kilograms?")
var height = prompt("What is your height in meters? (example 1.75)")

var bmi = Math.round(bmiCalculator(weight, height));
alert("Your BMI is " + bmi);
    
function bmiCalculator(weight, height) {
    var bmi = weight / (height*height);
        return bmi;
    }