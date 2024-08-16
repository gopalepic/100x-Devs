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
If you want to create an image from your own code , that you can pust to dockerhub,
you need to create a DockerFile for you application

DockerFile is a text document that contains all the commands a user could call on the command line to create an image

# Explaing docker the steps to run an file
![alt text](image-1.png)




 

