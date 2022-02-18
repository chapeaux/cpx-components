//import { serveTLS } from "https://deno.land/std/http/server.ts";
import { serve } from "https://deno.land/std@0.126.0/http/server.ts";
import { Router } from "https://deno.land/x/nativerouter/mod.ts";
import { walk } from "https://deno.land/std@0.126.0/fs/mod.ts";

const components = walk('./components/', {maxDepth:1,includeFiles:false});

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
  let list = '<!doctype html><html><head></head><body><ul>';
  for await(const cpx of components) { 
    list += cpx.name !== 'components' ? `<li><a href="${cpx.name}/demo">${cpx.name}</a></li>` : ''; 
  }
  list += '</ul></body>';
  //const index = await Deno.open('./components/index.html');
  return new Response(await list, {
    headers: {"Content-Type": "text/html"}
  });
}

const getComponent = async (req:Request, params:Record<string,string>):Promise<Response> => {
  //console.log('REQUEST:',`./components/${params.component}/${params.file !== 'demo'? params.file : 'demo/index.html'}`);

  const path = `./components/${params.component}/${params.file !== 'demo'? `${params.demo}/${params.file}` : 'demo/index.html'}`;
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

router.get('/', getIndex);
router.get('/data/:file', getData);
router.get('/:component/{:demo/}?:file?{/}?', getComponent);

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
