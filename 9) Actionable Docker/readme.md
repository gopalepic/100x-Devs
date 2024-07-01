here we will be covering how to run packages locally with docker eg: mongodb , postgres ...

Container : we can understand this as a mini computer , which have its own network / file system

 when we are running somethings on a container , its only running in the container only , it will be not running on my local(PC) computer .

  it means , container is isolated by the local computer 



  <Image> 
  Image is something which have all of that code need to run the package ,
  we can get an image from dockerhub

 <Running Locally> 

  lets take a example of mongodb 

  to pull it from the image of mongo 

   docker run mongo 

  but its nots connected to your localcomputer 
  if you run mongo compass, the mongo will complain 

  now we run the containers on the specific port 

  docker run -p 3000:27017 mongo

  the first port number => 3000
  this is the port number through which we can access the docker container 

means if in my mongoDB compass , i go to mongodb://localhost:3000 then only will be connected to the docker container


To run the mongo package in the background ,
don't want to see the logs 
then use 

its running in the deattached mode 
means no logs will be shows 

      docker run -d -p 27017:27017 mongo

to see the containes logs 

docker ps

<Killing>

to stop the container 

docker kill <Container id>



<Postgres>

docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 3000:5432 postgres

<Connectiong string it would make>

postgresql://postgres:mysecretpassword@localhost:3000/postgres
