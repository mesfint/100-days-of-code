let btn = document.getElementById('btnClick');
let counter = document.getElementById('counter');
var result = 0;



function buttonClick(){
  result += 1;
  counter.textContent = result;
  //alert('clicked!!!!');
  console.log(result);
  

}
