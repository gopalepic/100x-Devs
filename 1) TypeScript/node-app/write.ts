
  // Example 1


// function Greet(username:string){
     

//     console.log("hello " + username);
// }

// Greet("Jaishreeram")

  // Example 2 


//   function output(a:number,b:number){
//     let output:number = a+b;
//     console.log(output)
//     return output;
//   }

//   output(3,4)

// Example 3

// function delayedCall(fn:()=> void){
//     setTimeout(fn,3000);
// }

// delayedCall(function(){
//     console.log("be just epic")
// })

// Example 4

interface User{
    name:string;
    email:string;
    age:number;
}

function isLegal(user:User){
   (user.age > 18 ) ? true : false
   console.log(user)
   return user;
}


