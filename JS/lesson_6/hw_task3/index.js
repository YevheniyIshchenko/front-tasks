//put your code here
function checkSum(arr){
    if(!Array.isArray(arr)){
       return null;
   }else{
       let sum =0;
       for(let i= 0; i < arr.length; i++){
           sum+=arr[i];
       }
        return sum > 100 ? true : false;
   }
}