
 Types of <typescript>{similar to datatypes in strongly types languages
 like java  , c++}

 number 
 string
 boolean 
 null 
 undefined

 Typescript make the javascript the more strict like java,c++ etc

   Lets install typescript to your computer

    1) npm intall -g typescript 
         
         now create a TS file  , 
         in your terminal at desired directory 
    2)  npm init-y
     
        This code will make a TS file
    3) code learningTS.ts 

       To run the TS file 
        i USE ts-node
        Now install ts-node 

    4)  npm i -g ts-node

         To run the file 
    5)
    ts-node filename.ts


The tsconfig file

 the tsconfig file has a bunch of options that you can change to change the compilation process 

 1) target

  it selects the ECMAScript target version 
       it can be ES6
                 ES5
                 .... etc other older versions

 2) rootDir
    
    where should the compiler look for .ts files ,
    Good practice is for this to be the src folder


 3) outDir
     
     Where should the compiler look fo spit out the .js files


 
 <Interfaces>

      To assign a particular type to objects , interfaces are used 
 for eg: 
  
    interface User{
        name:string;
        email:string;
        age:number;
    }


 <Properties of Interfaces></>

    1) Can be implemented as a class
      
      example::-- 
           
            interface Person{
                name:string;
                age:number;
                type:human;
            }

            class Employee implements Person{
                name:sting;
                age:number;

                constructor(n:string , a:number){
                    this.name = n,
                    this.age = a;
                }  
                 ... Remaning code 
            }
       
    
   <Types>

   Similar to interfaces , but it lets you choose between options 

    eg::__ 
         
         type stringOrNumber = string | number ; 

   1) <Unions> it provides an extra edge when dealing with data
   2) <Intersection> What if you want to create a type that have every property of multiple interfaces / types

    eg: --  
     type Employee = {
        name:string;
     }

     type Person = {
        age:number
     }

     type leader = Employee & Manager;

     const chotaLeader = leader = {
        name:'bE@EPiC"
        age:44
     }

     <ARRAYS >
   User[] is a array interface 
     function filterUser(user:User[]) {
  return ...  
}
   
   array of numbers 
    let numbers : number[] = [1,23,4,6,3,5,75,4];


    <Enums >
 
   Enums(enumerations) are a feature that allows you to define a set of named constants.


   eg::-- 
          WHY ENUM ?? 

          lets says you are playing a game , and you wanted to move the user to all direactios
          like left , right , up and dows 

           if you try to implement this as a function 
            you won't be able to do that cause you will be focusing on type 
            wheather it should be number or string 
 <example>
             Should it be a string? (UP , DOWN , LEFT, RIGHT) ?
              Should it be numbers? (1, 2, 3, 4) ?
 </example>

 The best way to deal , USE ENUM


   enum Direction{
      Up,
      Down,
      Left,
      Right
   }

   function SomeValue(ways:Direction){
      ///.......
   }

 <Focus>  

    the values of UP , Down , Left , Right are stored as 0 , 1 , 2 , 3

    But if we change the value of first enum components , then all remaning values would be get increments by 1 from the value we provided 

<Example > 

enum Direction {
    Up=4,
    Down,
    Left,
    Right
}

console.log(Direction.Right)

 /// ANS => 7

<Enum with string>


enum Direction { 
    Up='Up',
    Down,
    Left ,
    Right ,
}

console.log(Direction.Left)

 ERROR => Enum member must have initializer.
   if strings are assigned , all the enum componensts must to be assisgn with some values

 <Generics>
  
      Generics enable you to create components that work with any data type while still providing compile-time type safety.

<example>


function identify<T>(arg:T):T{
    return arg;
}

let output1 = identify<string>("Generic is epic");
let output2 = identify<Number>(751);


</example>


 --- Done 

 