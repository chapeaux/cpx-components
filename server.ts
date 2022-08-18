import { serveTls, serve } from "https://deno.land/std@0.152.0/http/server.ts";
import { Router } from "https://deno.land/x/nativerouter@1.0.0/mod.ts";
import { walk } from "https://deno.land/std@0.152.0/fs/mod.ts";
import * as denoDoc from "https://deno.land/x/deno_doc@0.41.0/mod.ts";



const ContentTypes = new Map<string,string>([
  ['js', 'text/javascript'],
  ['html', 'text/html'],
  ['css', 'text/css'],
  ['png', 'image/png'],
  ['gif', 'image/gif'],
  ['jpg', 'image/jpeg'],
  ['jpeg', 'image/jpeg'],
  ['map', 'text/plain'],
  ['json', 'application/json'],
  ['ico', 'image/vnd.microsoft.icon'],
  ['svg', 'image/svg+xml'],
  ['ttf', 'font/ttf'],
  ['woff', 'font/woff'],
  ['woff2', 'font/woff2']
]);

const router = new Router();

/* Route Handlers */
const getIndex = async (req:Request, params:Record<string,string>):Promise<Response> => {
  const components = await walk('./components/', {maxDepth:1,includeFiles:false});
  let list = '';
  for await(const cpx of components) { 
    list += cpx.name !== 'components' ? `<li><a href="${cpx.name}/demo">${cpx.name}</a></li>` : ''; 
  }
  const body = `<!doctype html>
  <html><head></head>
  <body>
  <ul>${list}</ul>
  </body>`;
  return new Response(await list, {
    headers: {"Content-Type": "text/html"}
  });
}

const getComponent = async (req:Request, params:Record<string,string>):Promise<Response> => {
  const path = `./components/${params.component}/${params.file.endsWith('demo') || params.file.endsWith('demo/') ? 'demo/index.html' : params.file}`;
  const ext = path.slice(path.search(/\.\w+/)+1);
  const file = await Deno.open(path);
  return new Response(file.readable, {
    headers: {"Content-Type": ContentTypes.get(ext) || 'text/plain'}
  });
}

const getData = async (req:Request, params:Record<string,string>):Promise<Response> => {
  const data = await Deno.open(`./data/${params.file}`);
  return new Response(data.readable, {
    headers: {"Content-Type": "application/json"}
  });
}

const getDocs = async (req:Request, params:Record<string,string>):Promise<Response> => {
  const srcFiles = await walk(`./components/${params.component}/src`, {maxDepth:1,includeDirs:false,includeFiles:true});
  let docs = new Map<string,any>();
  for await (const srcFile of srcFiles) { 
    const docNode = await doc(`file://${Deno.cwd()}/components/${params.component}/src/${srcFile.name}`);
    docs.set(srcFile.name, docNode);
  }
  let list = '';
  docs.forEach((fileDoc,fileName) => {
    list += `<pfe-card>
    <h2 slot="header">${fileName}</h2>
    <ul>
    ${ fileDoc.map(docStr => {
     return `<li>${docStr.name} - ${docStr.kind}</li>`;
    })}
    </ul>
    <p>${fileDoc[0].jsDoc.doc.replace("\n","<p>")}</p>
    </pfe-card>`;
  })
  const tmpl = `
    <!doctype html>
    <html>
    <head>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700&amp;family=Red+Hat+Text&amp;family=Overpass+Mono&amp;display=swap" rel="stylesheet">
    <script type="module" src="https://unpkg.com/@patternfly/pfe-card@next?module"></script>
    <style>body { display: grid; grid-template-columns: repeat(3,1fr); grid-gap:30px;}</style>
    </head>
    <body>
    ${list}
    </body>
    </html>
  `
  return new Response(tmpl, {
    headers: {"Content-Type": "text/html"}
  });
}

router.get('/', getIndex);
router.get('/data/:file', getData);
router.get('/:component/docs{/}?', getDocs);
router.get('/:component/:file?{/}?', getComponent);


async function handler(request: Request) {
  try {
    return await router.route(request);
  } catch (e) {
    return new Response('Error', {
      headers: {"Content-Type": 'text/html'},
      status: e.status
    })
  }

}

serve(handler, {port: 8080});
// serveTls(handler, {certFile:'./localhost.pem', keyFile:'./localhost-key.pem', port: 8443 })
/*
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

await app.listen({ hostname: "0.0.0.0", port: 8080 });
*/
