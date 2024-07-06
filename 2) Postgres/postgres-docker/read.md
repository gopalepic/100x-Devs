just ran the postgres database with docker 

command i used 

 docker run --name bejustEpic -e POSTGRES_PASSWORD=yoyoyo -d -p 5432:5432 postgres

 means , name of the postgres database is bejustEpic and the password is yoyoyo , it is running in deatachable mode , means it won't show any logs and out desierd port which is 5432 , we can send request at this post 5432

 the connection string would look like 

 postgres://postgres:yoyoyo@localhost:5432//postgres?sslmode=disable

 docker ps ==> command to show your running postgres docker container

 we know two ways to send request to the database which were psql and pg librarys 

 now we will use docker 

 docker exec -it {container_id} /bin/bash

 using above code , we can use psql library which is already installed in the docker container 

 now using psql , we can send sql quries 

 made connection first 

psql -h {Host} -d {database name } -U {Username}
which is in my case 

psql -h localhost -d postgres -U postgres

Now we are ready to send sql quries

write direct quries

\dt; => this query show all the tables

Now we will be doing the above mentioned stuff in EXPRESS