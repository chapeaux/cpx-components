import { Application, Router } from "https://deno.land/x/oak/mod.ts";
const app = new Application();
const router = new Router();

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

await app.listen({ port: 8080 });
// await app.listen({ port: 8443, secure: true, certFile:'./localhost.pem', keyFile:'./localhost-key.pem'});
