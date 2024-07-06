// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:yoyoyo@localhost/postgres"
})

async function InsertUserData(id:number , username:string , email:string ,password:string) {
    await client.connect()
    const result = await client.query(`
        INSERT INTO users (id , username, email ,password )
        VALUES ($1,$2,$3,$4)
    ` , [ id , username , email , password ])
    console.log(result)
}

InsertUserData(1,'gopal','epic@batman','******** ');
// InsertUserData(2,'sunarakaChora','sunar@331','4543');
// InsertUserData(3,'gaam','gaama#524','5343543');