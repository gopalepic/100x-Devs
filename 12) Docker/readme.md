# Why Docker

1) Kubernetes orchestration 

2) Running processes in isolated environments

3) easy to run projects locally

# Containerization

 Containers are a way to package and distribute software applications in a way that makes them easy to deploy and run consistently across differnet envirnoments.

 Allow you to package an application

 # 3 Technologies to comfortable with 
 1) Docker Engine
 2) Docker CLI
 3) Docker registry

 # Docker Engine
 
 It is a Containerization Technology that allows develoeprs to package applications into containers

 Containers ==> Standard executable components combnining application CODE with OS libraries and DEPENDENCIES requried to run that code in any envirnment

 # Docker CLI
  Command Line Interface

 # Docker Registry

 Place where Images are stored 

 images => contains code like mongoImage , postgresImage

 # images VS containers

 1) Image
 Docker image is a lightweight , standalone , executable package that includes exerything needed to run a piece of software , including the code , a runtime libraries , environment variables and config files.

   Example => codebases on github


2) Container
 Container is a running instance of an image. 
 Runs in an isolated envirnment

 Example => Running that github codebase locally on you computer

 ![alt text](image.png)


# Docker Commands

docker images

docker ps 

docker run

docker build => to make our own docker image


# Docker File 
If you want to create an image from your own code , that you can push to dockerhub,
you need to create a DockerFile for you application

DockerFile is a text document that contains all the commands a user could call on the command line to create an image

# Explaing docker the steps to run an file
![alt text](image-1.png)


# Optimise Docker file 

Optimising a dockerFile command is a necessary step 

Whenever a DockerFile run the commands

 ## It caches the data like 

        [+] Building 2.7s (9/13)                            docker:default
 => [internal] load build definition from Dockerfile          0.0s
 => => transferring dockerfile: 238B                          0.0s 
 => [internal] load metadata for docker.io/library/node:20    2.4s 
 => [auth] library/node:pull token for registry-1.docker.io   0.0s
 => [internal] load .dockerignore                             0.0s
 => => transferring context: 2B                               0.0s 
 => CACHED [1/8] FROM docker.io/library/node:20@sha256:d3c8a  0.0s 
 => [internal] load build context                             0.1s 
 => => transferring context: 238B                             0.1s 
 => [2/8] WORKDIR /usr/src/app                                0.1s 
 => CACHED [3/8] COPY package* . 

## above text is the some text from the terminals 

Here u can see , Docker chaches the data ,and then process the steps 

as a GOOD DEVELOPER , we wanted to minimise the chaches 

Whenever the docker file see any changes in the code , it just again changes the data .... 

to we Always Optimise a dockerFIle 
![alt text](image-2.png)

The above image tells that 

if the package.json file changes , then on the npm install command will one 

and 
if and one if the primsa file will change , then only the npx prisma generate file will run

![alt text](image-3.png)

On changes only and only the index.ts file , six of the commands are not running agian , they are already cached 

on 7&8 commands are again running 

 ####  Each line of the dockerFile code is know as LAYERS





# Networks and Volumes 

both are concepts that become important when running multiple containers running in which you 

1) Need to persist data across docker restarts
2) Need to allow containers to talk to each other

## Volumes
