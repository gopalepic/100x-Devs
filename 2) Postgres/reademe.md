
<NoSQL> database
  store data in schema less fashion,Extemenly fast

  eg: MongoDB

  <SQL> database
   store data in form of rows and columns
   
   eg: MySQL , Postgres

<Why SQL>
  1) SQL databases have a strict schema 
  2) Data follows the schema
   


  <Create a Database>

    set up a Postgres database

      can be done with
        1) Using neondb{ https://neon.tech/ }

        2)Using docker 

    We will be using neonDb 


  <Libraries> that lets you connect and put data 

  1) psql {terminal based front-end to PostgreSQL}
  2) pg {Node.js library , used in backend }

  

  <Postgres Commands>

     CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL ,
        email VARCHAR(50) UNIQUE NOT NULL , 
        password VARCHAR(50) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
     );

**postgres exposes a protocol that someone needs to talk to be able to send these commands (update, delete) to the database.

<psql> is one such library that takes commonds from your terminal and sends it over to the database. 

we will be doing the same thing in NODE JS ,{With pg library}


<setup>
  npm install pg


  <IF working in a project>

    1) Make connection to the database 

<Code>
import { Client } from 'pg'
 
const client = new Client({
  host: 'my.database-server.com',
  port: 5334,
  database: 'database-name',
  user: 'database-user',
  password: 'secretpassword!!',
})

<OR>

 Use can use the connection string 

client.connect()
             
<THE THEORY>
   <Relationships> 

 Relation of two or more tables referred as Relationships in SQL

 suppose we wanted to store the address of the user , but the address is in written in road , street , colouny and etc 

 then putting all the address in a single table would be soo bad looking 

 so what we do , we make another table called address and in that table , we store the address of the uses 

 both the table hold the some relations between them 
 
![alt text](image.png)
    