// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:yoyoyo@localhost/postgres"
})

async function InsertUserData( username:string , email:string ,password:string , city:string , country:string, street:string , pincode:string) {
    await client.connect()

    //start transaction

    await client.query('BEGIN');

    const InsertIntoUsersTable = await client.query(`
        INSERT INTO users ( username, email ,password )
        VALUES ($1,$2,$3,)
        RETURNING id;
    `);
    
   
}

// InsertUserData(2,'sunarakaChora','sunar@331','4543');
// InsertUserData(3,'gaam','gaama#524','5343543');