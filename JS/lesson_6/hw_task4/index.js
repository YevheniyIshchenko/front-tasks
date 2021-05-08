const increaseEvenEl = (arr, delta) => {

    //put your code here
     if(!Array.isArray(arr)){
        return null;
    }else{  
        for( let i = 0; i < arr.length; i++){
            if(arr[i]%2 === 0){
                arr[i]=arr[i]+delta
            }
        }
        return arr;
    }


}



//example 1:

//input 
const arr = [2, 5, 6, 8, 11, 9, 4];
const delta = 20;
increaseEvenEl(arr, delta);

//output
//[22, 5, 26, 28, 11, 9, 24]