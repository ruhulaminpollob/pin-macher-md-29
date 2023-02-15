
function getPin() {
    const pin =generatePin();
    const pinString=pin+'';
    if (pinString.length===4) {
        return pin;
    }else{
        return getPin()
    }
}
function generatePin() {
    const random =Math.round(Math.random()*10000)
    return random;   
}
function setPin(pinNumber) {
    const pinFiled=document.getElementById('pin-input-filed');
    pinFiled.value=pinNumber
}


document.getElementById('generate-pin-btn').addEventListener('click',function () {
    const getRandomPin=getPin();
    setPin(getRandomPin);
})

document.getElementById('calculator-body').addEventListener('click', function (event) {
    
    const calculator =event.target.innerText;
    
    const machFiled=document.getElementById('machFiled');
    const previousMachFiled=machFiled.value;



    // const number=event.target.innerText;
    
    if (isNaN(calculator)) {
        if (calculator==='C') {
            machFiled.value='';
        }
        else if (calculator==='<') {
            const splits=previousMachFiled.split('');           
            splits.pop();
            const joins=splits.join('');
            machFiled.value=joins;
        }
    }else{
        machFiled.value=previousMachFiled + calculator;
    }
    
})