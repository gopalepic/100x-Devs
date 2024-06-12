import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://neondb_owner:4Kv1XLkHaVqN@ep-tiny-bush-a176y1mm.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"

});


async function postgresQuery(){
       await client.connect();
       const quring = await client.query(`
        CREATE TABLE users{
        NAME VARCHAR(50) PRIMARY KEY ,
        AGE VARCHAR(10) UNIQUE NOT 
        }
        `);
        console.log(quring)
}

postgresQuery();