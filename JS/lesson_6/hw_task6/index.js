//put your code here
function cloneArr(arr){
    if(!Array.isArray(arr)){
        return null;
    }else{
        let newArr = [];
        for(let i = 0; i < arr.length; i++){
            newArr.push(arr[i]);
        }
        return newArr;
    } 
}