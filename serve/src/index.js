const Koa = require('koa')
const router = require('./router/index')
const app = new Koa();


app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3333,()=>{
    console.log(`启动在3333`)
})