import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

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

const makeIndexHtml = (list) => `
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Component Demos</title>
  <meta name="description" content="Links to components/*/demo.">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
  <h1>Component Demos:</h1>
  <ul>
    ${list}
  </ul>
</body>
</html>`;

router
  .get("/", async (ctx) => {
    const path = "./components";

    let list = "";
    for await (const dirEntry of Deno.readDir(path)) {
      if (dirEntry.isDirectory) {
        const name = dirEntry.name;
        const demoIndex = `${path}/${name}/demo/index.html`;
        try {
          await Deno.readFile(demoIndex);
          list += `<li><a href="${name}/demo">${name}</a></li>`;
        } catch (_unused) {
          list += `<li>${name} (no demo)</li>`;
        }
      }
    }

    ctx.response.body = makeIndexHtml(list);
    ctx.response.type = "text/html";
  })
  .get("/favicon.ico", async (ctx) => {
    await ctx.send({
      root: Deno.cwd() + "/assets",
    });
  })
  .get("/data/:file", async (ctx) => {
    if (ctx?.params?.file) {
      const data = await Deno.open(`./data/${ctx?.params?.file}`);
      ctx.response.body = data.readable;
      ctx.response.type = "application/json";
    }
  })
  .get("/docs/:component", (ctx) => {
    // todo implement
  });

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx) => {
  await ctx.send({
    root: Deno.cwd() + "/components",
    index: "index.html",
  });
});

if (Deno.args.indexOf("https") >= 0) {
  await app.listen({
    port: 8443,
    secure: true,
    certFile: "./localhost.pem",
    keyFile: "./localhost-key.pem",
  });
} else {
  await app.listen({ port: 8080, hostname: "0.0.0.0" });
}
