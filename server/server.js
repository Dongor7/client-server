const Koa = require('koa');
const Router = require('koa-router');
const mongoose = require('mongoose');

const app = new Koa();
const router = new Router();

const PORT = process.env.PORT || 5000;
mongoose.connect('mongodb://Dongor7:SidarDen19940209@ds219832.mlab.com:19832/client-server', { useNewUrlParser: true });

// logger
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// API routes
require('./routes')(router);

app
    .use(router.routes())
    .use(router.allowedMethods())
    .use(require('koa-static')(__dirname + '/../client/build'));

app.listen(PORT, console.log(`API server started on ${PORT}`));
