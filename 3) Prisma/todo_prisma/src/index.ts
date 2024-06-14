import { PrismaClient } from '@prisma/client'
import { log } from 'console';
const prisma = new PrismaClient()


//  Code to add contents to the user tabel 


// async function insertUser(username:string,password:string,firstName:string,lastName:string) {
//     const res =await prisma.user.create({
//         data:{
//             username,
//             password,
//             firstName,
//             lastName
//         }
//     })
//     console.log(res);
// }

// insertUser('Sher_padhle','999999','shora6ftka', 'sunaro ka ')

// To update the data in an table 


//  interface updatedata{
//     firstName:string,
//     lastName:string
//  }

//  async function  UpdateUser(username:string,{firstName,lastName}:updatedata) {
//     const res = await prisma.user.update({
//        where:{username},
//        data:{
//         firstName,
//         lastName
//        }
//     })
//     console.log(res)
//  }
//  UpdateUser('beEpic',{
//     firstName:'oyw',
//     lastName:'453'
//  })

async function fetchUserDetails(username:string) {
    
    const res = await prisma.user.findFirst({
       where:{username}
    });
    console.log(res);
}

fetchUserDetails('beEpic')