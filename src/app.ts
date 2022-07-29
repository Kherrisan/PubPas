import * as Koa from 'koa';
import * as Router from 'koa-router';

const router: Router = new Router();
const app = new Koa();

router.get('/infos', async (ctx: Koa.Context) => {
  ctx.body = 'PubPas is running 😃.';
});

router.get('/decode', async (ctx: Koa.Context) => {
  const base64Encoded = ctx.query.text as string;
  const text = Buffer.from(base64Encoded, 'base64').toString('utf8');
  console.log(`Received text: ${text}`);
});

app.use(router.routes()).use(router.allowedMethods());

// Application error logging.
app.on('error', console.error);

export default app;