document.addEventListener('DOMContentLoaded',getData);

let textData;
function getData(){
    fetch('http://api.icndb.com/jokes/random')
    
    //Here all function are using Arrow function for simplacity
    .then(res => res.json())
    .then(data => {
        textData = (data.value.joke).replace(/Chuck Norris/g, "Raihan Alam");
        document.querySelector('.text-box').innerHTML = textData;
    })
    .catch(err => {console.log(err);})
}

let inputField = document.querySelector('#input-field');

inputField.addEventListener('keyup',setting);
let keypress=0;
let interval;
function setting(e){
    keypress++;
    if(keypress === 1){
        interval = setInterval(startTimer,10);
    }
    if(e.keyCode === 13)
    {
        let userData = inputField.value;
        stopTimer();
        showResult(userData);
    }
}

let result = document.querySelector('#result');
function showResult(userData){
    let errors = 0;
    let i = 0;

    for(i=0;i<textData.length;i++){
        if(textData[i] != userData[i]){
            errors++;
        }
    }
    let r;
    result.style.marginLeft = "100px";

    result.innerHTML =  `Missed: ${errors}`;
    if(seconds<5){

        result.innerHTML =  `May be copy past!`;
    }

}

let resetBtn = document.querySelector('#reset-btn');

resetBtn.addEventListener('click',resetAll);

function resetAll(){
    getData();
    inputField.value= '';
    result.innerHTML = '';
    result.style.marginLeft = "0px";
    keypress=0;
    resetTimer();

}