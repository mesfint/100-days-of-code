let runningTotal = 0;
let buffer = "0";//source of truth "0" initial value, keep on tracking whats on the screen
let previousOperator;//+-/*

const screen = document.querySelector('.screen');

//what happens when user clicks button
 function buttonClick(value){
    if(isNaN(value)){
      //This is not a number
      handleSymbol(value);
    } else {
      //this is a number
      handleNumber(value);
    }
    screen.innerText = buffer;//display the value on the screen

 }
function handleSymbol(value){
  console.log('handleSymbol', value)
  switch(value){
    case 'C':
        buffer = '0';
        runningTotal = 0;
        break;
    case '=':
      if(previousOperator === null){
        //need two numbers to do math
        return;

      }
        flushOperation(parseInt(buffer));
        previousOperator = null;
        buffer = +runningTotal;
        runningTotal = 0;
        break;
    case '←':
        if(buffer.length === 1){
          buffer = "0";
        } else {
          buffer = buffer.substring(0, buffer.length -1);
        }
        break;
    case '+':
    case '−':
    case '×':
    case '÷':
        handleMath(value);
        break;

  }

}

function handleMath(value){
  if( buffer === '0'){
    //do nothing
    return;
  }
  const intBuffer = parseInt(buffer);//you can also do like const intBuffer= +buffer
  if(runningTotal === 0){
    runningTotal = intBuffer;

  }else {
    flushOperation(intBuffer);//flushop-> actually do the math
  }
  previousOperator = value;

  buffer = '0';
}

function flushOperation(intBuffer){
  if(previousOperator === '+'){
    runningTotal += intBuffer;

  }else if(previousOperator === '−'){
    runningTotal -= intBuffer;
  }else if(previousOperator === '×'){
    runningTotal *= intBuffer;
  }else{
    runningTotal /= intBuffer;
  }
  console.log('running total', runningTotal);

}

function handleNumber(numberString){
  if(buffer === "0"){
    buffer = numberString;
  }else {
    buffer = buffer + numberString;//Concatenating input value numbers
  }
}

 function init(){
   document.querySelector('.calc-buttons')
   .addEventListener('click', function(event){
     buttonClick(event.target.innerText);
   })
   ;

 }

 init();