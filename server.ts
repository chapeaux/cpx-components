import {
  Application,
  HttpError,
  Router,
  send,
  Status,
} from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

// Error Handling
app.use(async (context, next) => {
  try {
    await next();
  } catch (e) {
    if (e instanceof HttpError) {
      context.response.status = e.status as any;
      if (e.expose) {
        context.response.body =
          `<!doctype html><html><body><h1>${e.status} - ${e.message}</h1></body></html>`;
      } else {
        context.response.body = `<!doctype html><html><body><h1>${e.status} - ${
          Status[e.status]
        }</h1></body></html>`;
      }
    } else if (e instanceof Error) {
      context.response.status = 500;
      context.response.body =
        `<!doctype html><html><body><h1>500 - Internal Server Error</h1></body></html>`;
      console.log("Unhandled Error:", e.message);
      console.log(e.stack);
    }
  }
});

router.get("/", async (ctx) => {
  ctx.response.body = await Deno.readTextFile(
    `${Deno.cwd()}/components/index.html`,
  );
}).get("/assets/:path+", async (ctx) => {
  // console.log(`${Deno.cwd()}/data/${ctx.params.path}`);
  await send(
    ctx,
    ctx.params && ctx.params.path ? ctx.params.path : ctx.request.url.pathname,
    {
      root: `${Deno.cwd()}/assets/`,
    },
  );
}).get("/data/:path+", async (ctx) => {
  // console.log(`${Deno.cwd()}/data/${ctx.params.path}`);
  await send(
    ctx,
    ctx.params && ctx.params.path ? ctx.params.path : ctx.request.url.pathname,
    {
      root: `${Deno.cwd()}/data/`,
    },
  );
}).get("/node/:path+", async (ctx) => {
  await send(
    ctx,
    ctx.params && ctx.params.path ? ctx.params.path : ctx.request.url.pathname,
    {
      root: `${Deno.cwd()}/node_modules/`,
    },
  );
}).get("/(.*)", async (ctx) => {
  // console.log(ctx.request.url.pathname);
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/components/`,
    index: "index.html",
  });
});
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port }) => {
  console.log(`Serving ${Deno.cwd()}/components`);
  console.log(`Start listening on ${hostname}:${port}`);
});

//await app.listen({ hostname: "0.0.0.0", port: 8000 });
await app.listen({hostname: "0.0.0.0", port: 4430, secure: true, certFile: 'localhost.pem', keyFile: 'localhost-key.pem' });

