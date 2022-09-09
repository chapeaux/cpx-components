import { Application, Router } from "https://deno.land/x/oak/mod.ts";
const app = new Application();
const router = new Router();

app.use(async (ctx, next) => {
  await next();
  if (ctx.response.status === 404 && ctx.request.accepts("text/html")) {
    ctx.response.type = "html";
    ctx.response.body = `
       <HTML>
         <BODY>
           <H1>Error! You've reached the wrong place</H1>
         </BODY>
       </HTML>
     `;
  }
});

router
  .get("/data/:file", async (ctx) => {
    if (ctx?.params?.file) {
      const data = await Deno.open(`./data/${ctx?.params?.file}`);
      ctx.response.body = data.readable;
      ctx.response.type = "application/json";
    }
  })
  .get("/docs/:component", (ctx) => {

  })

app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (ctx) => {
  await ctx.send({
    root: Deno.cwd()+'/components',
    index: 'index.html'
  });
});

if (Deno.args.indexOf('https') >= 0) {
  await app.listen({ port: 8443, secure: true, certFile:'./localhost.pem', keyFile:'./localhost-key.pem'});
} else {
  await app.listen({ port: 8080, hostname: '0.0.0.0' });
}
