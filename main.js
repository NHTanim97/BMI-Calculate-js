const weightInput = document.getElementById('weight-input')
const heightInput =  document.getElementById('height-input')
const successBtn = document.getElementById('btn-success')
const resetBtn = document.getElementById('btn-reset')
const result = document.getElementById('dynamic__bmi')
const message = document.getElementById('bmi_text')

/*
    step 1
    Find the functions
    এই applicatioon এ ২টি function আছে
    1. Calculate BMI functionality
    2. Reset functionlity
*/
successBtn.addEventListener('click', calculateBMI);
resetBtn.addEventListener('click', reset);

function calculateBMI(){
    //show করানোর জন্য ৩ টি variable declear করা হয়েছে 
    let height, weight, bmi;

    // heightInput কে number এ convert করা হয়েছে 
    height = Number(heightInput.value);
    weight = Number(weightInput.value);


    /* 
      * bmi calculate weight / (height squre)
      * convert meter height value
    */
    bmi =  weight / (height * 0.0254 * height * 0.0254);

    // toFixed(2) মানে দশমিক এর পরে ২ ঘর দেখাবে
    result.textContent = bmi.toFixed(2);

    // show daynamic message
    let msg = showMessage(bmi)
    message.innerHTML = msg;
}



/*
   * show daynamic message calculate bmi
*/
function showMessage(bmiValue){
    if(bmiValue < 16){
        return 'You are Severe Thin'
    }else if(bmiValue >= 16 && bmiValue <= 17){
        return 'You are Moderate Thin'
    }else if(bmiValue > 17 && bmiValue <= 18.5){
        return 'You are Mid Thin'
    }else if(bmiValue > 18.5 && bmiValue <= 25){
        return 'You are Normal'
    }else if(bmiValue > 25){
        return 'You are OverWeight'
    }
}



/* 
  * reset button
  * reset btn এ click করলে সব কিছু null হয়ে যাবে ।
*/
function reset(){
   heightInput.value = ''
   weightInput.value = ''
   result.textContent = '_________'
   message.textContent = ''
}



/*
  * upexpected value submit error
*/
function eventHandler(){
    if(Number(heightInput.value) && Number(weightInput.value)){
        calculateBMI();
    }else{
        alert('Please Provide your valid number')
        reset()
    }
}