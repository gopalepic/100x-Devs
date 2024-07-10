starting with cloud fare servereless 

<Code in terminal>
npm create cloudflare -- beepic

type of the application
 
 select 
   type "Hello World" Worker

   say no to deploy the application




wrangles is the cli of the cloud fare 
we can deply out appliactions absolutely for free by posting them on clound fare 

1) LOGIN TO THE CLOUD FARE ACCOUNT  

npx wrangler login


{You can check about yours account details}
 2)    npx wrangler whoami

3) npm run deploy

cloud fare have very ugly code 

someone started a libray called hono
{it has basic backend code }

 npm create hono@latest my-app

import { Hono } from 'hono'

const app = new Hono()
 // this is the backend code just like express to be used in the hono
app.get('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app

code to be written in the src/index.ts


<Point to be remembered>

Cloud fare is provideing the free channel , ,

we can deploy our backend code on that 

cloudfare backend code is bit complex 
and we can use the hono , 
 it is approcimately same like express in nodejs , just an extra 
 C(means context) then rest do the same as we do in the express node js applications

 