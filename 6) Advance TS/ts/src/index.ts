import express from 'express'
import z from 'zod'
const app = express();

/// name age email , by making an object

const userProfileSchema = z.object({
    name: z.string().min(1,{message:"Name can not be empty"}),
    age : z.number().min(18,{message:'You must be at least 18 years old '}).Optially(),
    email : z.string().email({message:'Invalid email format'})
})

type UserProfileType = z.infer< typeof userProfileSchema>

app.put('/users',(req,res) => {
    const {success} = userProfileSchema.safeParse(req.body);
    const updateBody = UserProfileType.body;

    if(!success){
        res.status(411).json({message:"Enter details"})
    }
    res.json({
        message:'User updated'
    });
});

app.listen(3000,()=>{
   console.log("server is flying ")
})


//{{{{{{{      Pick    }}}}}}}


// interface epic{
//     email:string,
//     name:string,
//     petName : string , 
//     allotedNO : number ,

// }

//  type selectiveFunctions = Pick<epic,'email'|'petName'>


//  function AddedSum(x:selectiveFunctions, y:epic){
//          return x.petName + y.name;
//  }

//{{{{{{{      Partial    }}}}}}}


// interface epic{
//     name:string,
//     habit:string,
//     pushups:number,
//     phsycal:string,
//     health:string
// }

// type selectFew = Pick<epic,'name' | 'habit' | 'pushups'>

// // lets say the push ups and habit field is not requreid
// // to give my the user 
// // what we can do is just 

// type Optially = Partial<selectFew>

// function todoEpicShit(x:Optially){
//     return x.name +" " + x.pushups;
// }
// console.log(todoEpicShit({name:'hellp'}))

//{{{{{{{    ReadOnly      }}}}}}}


// type User = {
//    readonly name:string,
//     age : number 
// }

// const user:User = {
//     name:'soninaro',
//    age:323
// }

// let aale:number = user.age = 324
// console.log(aale)

//{{{{{{{      Record    }}}}}}}

// interface User {
//     name: string , 
//     age : number
// }

// type Users = Record<string , User>

// const epicUser:Users = {
//     'sdfsdf':{ name:'helloabc', age:3},
//     'sdf':{ name:'helloabc', age:3},

// }



//{{{{{{{     Map    }}}}}}}

// type typesOfmap = {
//     name:string,
//     age:number
// }
// const users = new Map<string ,typesOfmap>()
// users.set('bhaukaleki', {name:'hero',age:0,})
// users.set('Jaidesi',{name:'jaishreeram' , age:44})

// const user = users.get('Jaidesi')
// console.log(user)

 //{{{{{{{     Exclude    }}}}}}}


// type Event = 'click' | 'scroll' | 'mousemove';
// type ExcludeEvent = Exclude<Event, 'scroll'>; // 'click' | 'mousemove'

// const handleEvent = (event: ExcludeEvent) => {
//   console.log(`Handling event: ${event}`);
// };

// handleEvent('click'); // OK
