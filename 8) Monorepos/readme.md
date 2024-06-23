making out own npm package like express or mongooose 

in the current repo
Client
server 
common 

folders are present 


out sourcing the js file ,
make common in tsconfig file 

"outDir" : "dist"

now the folder package.json file needs to be get replaced 

it main should be  changed by this
 "main": "dist/index.js",


 change name to something different 
 i put 
 gopalepic/common


we are ready to public an package in npm

after creating an account in npm

      npm login 
      npm publish --access=public

      
We should never disclose out index.ts file to npm 
it is good practice to only disclose our index.js file out index.ts file 

how to do that 

make a .npmignore file in your rootdir of your file 

npm the location of your index.TS file which is src in my case 

