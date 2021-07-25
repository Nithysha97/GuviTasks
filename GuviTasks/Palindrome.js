var palindromeArray = function(arr){
    
    for(let i = 0; i < arr.length; i++) {

       
        if(arr[i] !== arr[arr.length - i - 1]){
          console.log(arr[i]);
        }
    }}
    palindromeArray([121,322,666]);