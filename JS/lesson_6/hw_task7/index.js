//put your code here
function cheker(arr){
    if(!Array.isArray(arr)){
     return null;
 }else{
     let min;
     let max;
     arr.sort(function(a, b) {
        return a - b;
      });
     min = arr[0];
     max = arr[arr.length-1]
     let result = (min + max) > 1000 ? true : false;
     return result;
 }  
}