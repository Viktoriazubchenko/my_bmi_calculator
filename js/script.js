let btn = document.querySelector('.btn');
let weightParams = document.querySelector('#weight');
let heightParams = document.querySelector('#height');
let bmiNum = document.querySelector('.bmi-num');
let diagnosisState = document.querySelector('.diagnosis');
let result = document.querySelector('.result');

btn.addEventListener('click', function(){
    givingResult();
});

function calculateBMI(){
    let weight = +weightParams.value;
    let height = +heightParams.value;
    let BMI = Math.floor((weight / height / height) * 10000);
    let diagnosis;
    
    if (BMI >= 40){
        diagnosis = 'in the extremely obese range';
    } else if (BMI < 40 && BMI > 30) { 
        diagnosis = 'in the obese range';
    } else if (BMI <= 30 && BMI > 25) {
        diagnosis = 'in the overweight range';
    } else if (BMI <= 25 && BMI > 19) {
        diagnosis = 'in the healthy weight range';
    } else if (BMI <= 19 ) {
        diagnosis = 'in the underweight range';
    }

    let params = {
        'weight': weight,
        'height': height,
        'BMI': BMI,
        'diagnosis': diagnosis
    };
    return params;  
}

function givingResult(){
    let params = calculateBMI();
    result.innerHTML = 'Your BMI is ' + params.BMI + ', You are ' + params.diagnosis;
    console.log(params);
}