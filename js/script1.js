let seconds = 00;
let tens = 00;

let secondsField = document.querySelector('#seconds');
let tensField = document.querySelector('#tens');


function startTimer(){
    tens++;
    if(tens<9){
        tensField.innerHTML = "0" + tens;
    }
    if(tens > 9){
        tensField.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        secondsField.innerHTML = "0" + seconds;
        tens = 0;
        tensField.innerHTML = "0" + 0;
    }
    if(seconds>9){
        secondsField.innerHTML = seconds;
    }
}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    tens = "00";
    seconds = "00";

    secondsField.innerHTML = seconds;
    tensField.innerHTML = tens;
}
