// return the maximum value in a array

// 1) Easy way
   let numbers : number[] = [1,23,4,6,3,5,75,4];
let a=numbers[0];
let b=numbers[1]

 let sortedArray :number[] =  numbers.sort()
 console.log(sortedArray[numbers.length - 1])

 // 2) Conceptional way

    function maxvalue(arr: number[]){
        let max = 0 ;

        for(let i = 0; i< arr.length; i++ ){
              if(arr[i] > max){
                max = arr[i];
              }
        }
        return max
    }

   console.log( maxvalue([2,4,434,6345345345,2]))