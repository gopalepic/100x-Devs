// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:yoyoyo@localhost/postgres"
})

async function InsertUserData(user_id:number , city:string , country:string ,street:string, pincode:string) {
    await client.connect()
    const result = await client.query(`
        INSERT INTO addresses (user_id , city , country ,street, pincode )
        VALUES ($1,$2,$3,$4)
    ` , [ user_id , city , country , street , pincode])
    console.log(result)
}

InsertUserData(1,'jaipur','India','motivihar colonoy ' , '302031');