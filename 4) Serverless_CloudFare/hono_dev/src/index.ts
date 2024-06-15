import { Hono } from 'hono'

const app = new Hono()

async function middleware(c:any , next:any) {
  if(c.req.header("Authoriazation")){
    await next()
  }else{
    return c.text("You don' have access");
  }
}  

app.post('/', middleware,(c) => {
  return c.text('be" EPIC')
})

export default app
