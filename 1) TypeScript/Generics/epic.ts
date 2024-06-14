
// first element of an array



// function values(arr:(number|string)[]){
//     return arr[0];
// }

// console.log(values([2,4,6,3,4,234,2]))

function getFirstElement<T>(arr:T[]){
    return arr[0];
}
const first_ele = getFirstElement<string>(['hello',"helllomoto"]);
console.log(first_ele);