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

        const Relationships = `
          SELECT * FROM beepic
          INNER JOIN epic ON beEPic.collage = epic.collage
        `;
 

        const res = await client.query(Relationships);
        console.log("Joined table data : ");
        console.log(res.rows);
        
        
    } catch (err) {
        console.error('Error during process:', err);
    } finally {
        await client.end();
    }
}

postgresQuery();


    
