import { Client } from "pg";
require('dotenv').config();
async function postgresQuery() {
    let { CONNECTION_STRING } = process.env;
    const connectionString = `${CONNECTION_STRING}`
    const client = new Client({ 
        connectionString
     });
   

    try {
        await client.connect();
        console.log("Connected to database");

        const SelectingData = `
        SELECT * FROM beepic WHERE email = $1
        `;
            const values = ['humsafar.in']  

        const res = await client.query(SelectingData,values);
        if(res.rows.length > 0 ){
            console.log(`User with mail id ${values[0]}`,res.rows[0]);
        }
        else{
            console.log('No user was found with mentioned mail id');
            
        }
       console.log("new row ",res);
    } catch (err) {
        console.error('Error during process:', err);
    } finally {
        await client.end();
    }
}

postgresQuery();




<Quries>

 const Relationships = `
          SELECT * FROM beepic
          INNER JOIN epic ON beEPic.collage = epic.collage
        `;