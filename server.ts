//import { serveTLS } from "https://deno.land/std/http/server.ts";
import { Application, Router, HttpError, Status, send } from "https://deno.land/x/oak@v6.2.0/mod.ts";
//import { viewEngine, engineFactory, adapterFactory } from "https://deno.land/x/view_engine@v1.4.5/mod.ts";
import { acceptWebSocket, acceptable, isWebSocketCloseEvent, WebSocket } from "https://deno.land/std/ws/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { walk, walkSync, WalkEntry } from "https://deno.land/std/fs/mod.ts";

//import { Session } from "https://deno.land/x/session/mod.ts";
// import {
//   viewEngine,
//   engineFactory,
//   adapterFactory,
// } from "https://deno.land/x/view_engine/mod.ts";

// import { applyGraphQL, gql} from "https://deno.land/x/oak_graphql/mod.ts";
// import { GraphQLScalarType, Kind } from "https://deno.land/x/oak_graphql/deps.ts";

/*
import { watch } from "https://deno.land/x/watch@1.1.0/mod.ts";
import {
  acceptWebSocket,
  isWebSocketCloseEvent,
  isWebSocketPingEvent,
  } from "https://deno.land/std/ws/mod.ts";

const port = Deno.args[0] || "8088";
*/

// Web Socket
// const wss = new WebSocketServer(4430);

// wss.on('connection', function(ws: WebSocketClient) {
//   ws.on("message", function (msg: string) {
//     console.log('WS Message:',msg);
//     ws.send(msg);
//   });
// });
// END Web Socket

const app = new Application();
const router = new Router();
// const ejsEngine = await engineFactory.getEjsEngine();
// const oakAdapter = await adapterFactory.getOakAdapter();
//const session = new Session({ framework: "oak" });
//await session.init();

// app.use(viewEngine(oakAdapter, ejsEngine));
//app.use(session.use()(session, {sameSite: "Secure" }));

// Error Handling
app.use(async (context, next) => {
  try {
    await next();
  } catch (e) {
    if (e instanceof HttpError) {
      context.response.status = e.status as any;
      if (e.expose) {
        context.response.body = `<!doctype html><html><body><h1>${e.status} - ${e.message}</h1></body></html>`;
      } else {
        context.response.body = `<!doctype html><html><body><h1>${e.status} - ${Status[e.status]}</h1></body></html>`;
      }
    } else if (e instanceof Error) {
      context.response.status = 500;
      context.response.body = `<!doctype html><html><body><h1>500 - Internal Server Error</h1></body></html>`;
      console.log("Unhandled Error:", e.message);
      console.log(e.stack);
    }
  }
});

// const users = [
//   {id: 0, username: 'User One', evals: [
//     {product:{id: 'rhel', name: 'Red Hat Enterprise Linux'}, days_remaining: 30}, 
//     {product:{id: 'openshift', name: 'Red Hat OpenShift Container Platform'}, days_remaining: 0}
//   ]},
//   {id: 1, username: 'User Two', evals: [
//     {product:{id: 'rhel', name: 'Red Hat Enterprise Linux'}, days_remaining: 30}, 
//     {product:{id: 'openshift', name: 'Red Hat OpenShift Container Platform'}, days_remaining: 30}
//   ]},
//   {id: 2, username: 'User Three', evals: [
//     {product:{id: 'rhel', name: 'Red Hat Enterprise Linux'}, days_remaining: 0}, 
//     {product:{id: 'openshift', name: 'Red Hat OpenShift Container Platform'}, days_remaining: 0}
//   ]}
// ];

// const products = [
//   {id: 'rhel', name: 'Red Hat Enterprise Linux'}
// ];

// const evals = [

// ]
// const blogs = [
//   {author: 'Foo Bar', created: new Date('01/10/2010'), title: 'Foo Title', description: 'Descriptive Foo', url: 'http://127.0.0.1:8000'},
//   {author: 'Bar Foo', created: new Date('01/12/2010'), title: 'Bar Title', description: 'Descriptive Bar', url: 'http://127.0.0.1:8000'},
//   {author: 'Foobar Barfoo', created: new Date('01/11/2010'), title: 'Foobar Title', description: 'Descriptive Foobar', url: 'http://127.0.0.1:8000'},
// ]

// const types = (gql as any)`
// type Blog {
//   author: String
//   created: Date
//   title: String
//   description: String
//   url: String
// }

// type User {
//   id: Int
//   username: String
//   evals: [Eval]
// }

// type Product {
//   id: String
//   name: String
// }

// type Eval {
//   product: Product
//   days_remaining: Int
// }

// scalar Date

// type Query {
//   getAllBlogs(term: String): [Blog!]!
//   getUserById(id: Int): User!
// }`;

// const resolvers = {
//   Query: {
//     getAllBlogs: (term:String) => {
//       return blogs;
//     },
//     getUserById: (parent:any, {id}:any) => {
//       //console.log('ID:',Number.parseInt(id));
//       return users[Number.parseInt(id)];
//     }
//   },
//   Date: new GraphQLScalarType({
//     name: 'Date',
//     description: 'Date custom scalar type',
//     parseValue(val) {
//       return new Date(val);
//     },
//     serialize(val:Date) {
//       return val;
//     },
//     parseLiteral(ast:any) {
//       if (ast.kind === Kind.INT) {
//         return new Date(+ast.value);
//       }
//       return null;
//     }
//   })
// }

// const GraphQLService = await applyGraphQL({
//   typeDefs: types,
//   resolvers: resolvers,
//   //usePlayground: false,
//   context: (ctx) => {
//     return { user: 'Barfoo'};
//   }
// })

// app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

router.get("/", async (ctx) => {
  ctx.response.body = await Deno.readTextFile(`${Deno.cwd()}/components/index.html`);
}).get("/assets/:path+", async (ctx) => {
  // console.log(`${Deno.cwd()}/data/${ctx.params.path}`);
  await send(ctx, ctx.params && ctx.params.path ? ctx.params.path : ctx.request.url.pathname, {
    root: `${Deno.cwd()}/assets/`
  });
}).get("/data/:path+", async (ctx) => {
  // console.log(`${Deno.cwd()}/data/${ctx.params.path}`);
  await send(ctx, ctx.params && ctx.params.path ? ctx.params.path : ctx.request.url.pathname, {
    root: `${Deno.cwd()}/data/`
  });
}).get("/node/:path+", async (ctx) => {
  await send(ctx, ctx.params && ctx.params.path ? ctx.params.path : ctx.request.url.pathname, {
    root: `${Deno.cwd()}/node_modules/`
  });
}).get("/(.*)", async (ctx) => {
  // console.log(ctx.request.url.pathname);
    await send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}/components/`,
      index: 'index.html'
    });
});
app.use(router.routes());
app.use(router.allowedMethods());


// File Watcher
// let watchPaths = new Set<WalkEntry>();
// for await (const entry of walk('./components')) {
//   watchPaths.add(entry)
// }
    // .filter(path=>path.isDirectory&&(/components\/.+\/(?:src|demo)/).test(path.path))
    // .map(path=>path.path);

// async function bundleFiles(path:string) {
//   const { files, diagnostics } = await Deno.emit(path,{
//       check: false,
//       //bundle: "esm",
//       compilerOptions: {
//           lib: ["es6", "dom"],
//           module: 'es6',
//           target: 'es6'
//       }
//   });
//   if (diagnostics.length) {
//       console.warn(Deno.formatDiagnostics(diagnostics));
//   }
//   Deno.writeTextFile(path.replace('/src','').replace('.ts','.js'), files['deno:///bundle.js']);
// }

// const watcher = Deno.watchFs(watchPaths, {recursive: true});
// for await (const event of watcher) {
//     console.log(event);
//     event.paths.map(path=> {
//         if ((/components\/.+\/src/).test(path)) {
//             bundleFiles(path);
//             wsClients.forEach( (ws:WebSocket) => {
//               ws.send('refresh');
//             });
//         } else {

//         }
//     });
// }
// END File Watcher


// const server = serveTLS({hostname: '0.0.0.0', port:4430, certFile: 'localhost.pem', keyFile: 'localhost-key.pem'})

// let wsClients = new Map<string,WebSocket>()

// for await (const req of server) {
//   if (req.url === '/ws') {
//     if (acceptable(req)) {
//       acceptWebSocket({
//         conn: req.conn,
//         bufReader: req.r,
//         bufWriter: req.w,
//         headers: req.headers
//       }).then(async (ws:WebSocket) => {
//         console.log('New connection');
//         const uid = v4.generate();
//         wsClients.set(uid, ws);

//         for await (const evt of ws) {
//           console.log(evt);

//           if (isWebSocketCloseEvent(evt)) {
//             wsClients.delete(uid);
//           }

//           if (typeof evt === 'string') {
//             let evtObj = JSON.parse(evt);
//             console.log(evtObj);
//           }
//         }
//       })
//     }
//   } else {
//     if (exists(`./components/${req.url}`)) {
//       const file = `./components/${req.url}`
//       const path = await Deno.stat(file);
      
//       req.respond({
//         status: 200,
//         body: await Deno.open(path.isFile ? file : file+'/index.html')
//       });
//     } else {
//       req.respond({
//         status: 404,
//         body: 'Page not found'
//       })
//     }
    
//   }
// }

// Static serving
// app.use(async (ctx) => {
//   await ctx.send({
//     root: `${Deno.cwd()}/components`,
//     index: 'index.html',
//   });
// });

app.addEventListener('listen', ({hostname, port}) => {
  console.log(`Serving ${Deno.cwd()}/components`);
  console.log(`Start listening on ${hostname}:${port}`);
})

//await app.listen({hostname: "0.0.0.0", port: 8000 });
await app.listen({hostname: "0.0.0.0", port: 4430, secure: true, certFile: 'localhost.pem', keyFile: 'localhost-key.pem' });
/*
for await (const req of serve(`:${port}`)) {
  const { conn, r: bufReader, w: bufWriter, headers } = req;

  try {
    const sock = await acceptWebSocket({
            conn,
	    bufReader
	    bufWriter,
	    headers,
	    });
    console.log("socket connected!");

    try {
      for await (const ev of sock) {
        if (typeof ev === "string") {
          console.log("ws:Text", ev);
            await sock.send(ev);
        } else if (isWebSocketPingEvent(ev)) {
          const [,body] = ev;
          console.log("ws:Ping", body);
        } else if (isWebSocketCloseEvent(ev)) {
          const { code, reason } = ev;
          console.log("ws:Close", code, reason);
        }
      }
    } catch (err) {
      console.error(`failed to accept websocket: ${err}`);
      await req.respond({ status: 400 });
    }
 }
 */

