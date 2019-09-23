document.title = 'Question 7 Reverse Integer Demo Page';
var Reverse_Integer = function(num) {
  var y;
  if(num < 0){
    y=num.toString().split('').reverse();
    // console.log(y);
    y.unshift('-');
    y.pop();
    y = parseInt(y.join(''));
    //Check for 32 bit outside of bounds
    if(y < -2147483648 ) {
        return 0
    }
    //positive case start here
  } else {
    y = num.toString().split('').reverse().join('');
    y = parseInt(y)
    //Check for 32 bit outside of bounds
    if (y > 2147483648) {
        return 0
    } 
  }
  return y
}     
  // console.log(Reverse_Integer(123));
window.onload = function() {
  submit.addEventListener("click", function(){
      var input = document.getElementById("input");
      var submit = document.getElementById("submit");
      var demo1 = document.getElementById("demo1");
      var demo2 = document.getElementById("demo2");
      var iv = input.value;
    if(iv === "") return   alert('this is not valid');
    //* Important Notice when input from HTML is string 
    if(iv === "0" ) return   alert('reverse 0 is 0, please input other number to verify'); 
    // console.log(iv);
    // console.log(typeof iv); 
    // console.log(Reverse_Integer(iv));
    submit.onclick = function (){
      var oiv = parseInt(iv);
      var ov= parseInt(Reverse_Integer(iv));
      console.log(typeof oiv);
      console.log(typeof ov);
      demo1.innerHTML = oiv;
      demo2.innerHTML = ov;
    }
  })
}