var weight = prompt("What is your weight in kilograms?")
var height = prompt("What is your height in meters? (example 1.75)")


function bmiCalculator(weight, height) {
    // Calculate BMI
    var bmi = Math.round(weight / (height * height));
    
    // Determine the BMI category and format the message
    if (bmi < 18.5) {
        alert("Your BMI is "+ bmi +", so you are underweight.");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        alert("Your BMI is "+ bmi +", so you have a normal weight.");
    } else { // bmi > 24.9
        alert("Your BMI is "+ bmi +", so you are overweight.");
    }
}
    
// Call function
bmiCalculator(weight, height);