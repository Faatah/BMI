// Good Luck! You got this 💪🏾
// Write your code here.
function calculateBMI(weight, height) {
    // Calculate BMI
    const bmi = weight / (height * height);
  
    // Return BMI rounded to one decimal place
    return bmi
  }
  const mohamedWeight = 75; // in kg
const mohamedHeight = 1.75; // in meters
const mohamedBMI = calculateBMI(mohamedWeight, mohamedHeight);

const aliWeight = 68; // in kg
const aliHeight = 1.80; // in meters
const aliBMI = calculateBMI(aliWeight, aliHeight);

if (mohamedBMI > aliBMI) {
  console.log("Mohamed has a higher BMI");
} else if (aliBMI > mohamedBMI) {
  console.log("Ali has a higher BMI");
} else {
  console.log("Mohamed and Ali have the same BMI");
}