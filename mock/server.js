const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', async (context) => {
    const html = 'home';
    context.body = html;
});

router.get('/api/home', async (context) => {
    const data = require('./data/home');
    context.body = data;
});

router.get('/api/recommend', async (context) => {
    const data = require('./data/recommend');
    context.body = data;
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);