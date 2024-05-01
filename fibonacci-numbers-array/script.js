var output = [];
// var n = 10;
let n = prompt("How many Fibonacci numbers will there be in the array?");

function formArray(n){
  for (var i = 0; i <= n-1; i++) { 
    
      if (i === 0) {
        output.push(0);
      }
    
      else if (i === 1) {
        output.push(1);
      }
    
      else if (i > 1){
        console.log(output, output[i - 2], output[i - 1]);
        let sum = output[i - 2] + output[i - 1];
        output.push(sum);
      }
    }  
return output;
}
formArray(n);
alert("Array of " + n + " Fibonacci numbers: " + output);