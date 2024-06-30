// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//My Solution

function bmi(weight, height) {
    let bmiValue = weight/(height**2)
    return bmiValue <= 18.5 ? "Underweight" : bmiValue <= 25 ? "Normal" : bmiValue <= 30 ? "Overweight" : "Obese"
  }