const Router = require('koa-router');
const router = new Router();
router.get('/',()=>{

})
router.get('/api',async (ctx)=>{
    ctx.body="123"
})
module.exports = router