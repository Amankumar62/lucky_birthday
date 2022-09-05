const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValues(sum,lucky){
if(sum%lucky === 0){
    outputBox.innerText = "Your Birthday is lucky 🚀";
}
else{
    outputBox.innerText = "Your birthday is not lucky 😔"
}
}

function checkBithDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum,luckyNumber.value);

}

function calculateSum(dob){
dob = dob.replaceAll("-","");
let sum = 0;
for(let i = 0; i < dob.length ;i++){
    sum = sum + Number(dob.charAt(i));
}
return sum;
}

checkNumberButton.addEventListener('click', function getValues(){
checkBithDateIsLucky();
});