import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";

const app = new Application();
const router = new Router();

app.use(async (ctx, next) => {
  await next();
  if (ctx.response.status === 404 && ctx.request.accepts("text/html")) {
    ctx.response.type = "text/html";
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
  })
  .get("/search", (ctx) => {
    //https://api.developers.redhat.com/search/v1/?start=0&sort=score+desc&q=rhel&hl=true&hl.fl=description&rows=10
    ctx.response.type = "application/json";
    ctx.response.body = JSON.stringify({
      "response":{
        "numFound":999,
        "start":0,
        "maxScore":16.025692,
        "docs":[
          {
            "type":["article"],
            "description":[
              "The rise of the purpose-built Linux distribution\nRecently, several purpose-built distributions have been created specifically to run Linux containers.  There seem to be more popping up every day."
            ],
            "title":[
              "Introducing the \"rhel-tools\" for RHEL Atomic Host | Red Hat Developer"
            ],
            "id":"https://developers.redhat.com/blog/2015/03/11/introducing-the-rhel-container-for-rhel-atomic-host/",
            "lastModified_dt":"2018-04-06T08:45:44Z",
            "score":16.025692
          },
          {
            "type":["article"],
            "description":["Here are a few interesting excerpts from the recent Red Hat Enterprise Linux 5.10 announcement for general availability and today's Red Hat Enterprise Linux 6.5 beta announcement."],
            "title":["RHEL 5.10 Generally Available, RHEL 6.5 in Beta! | Red Hat Developer"],
            "id":"https://developers.redhat.com/blog/2013/10/08/rhel-5-10ga-6-5beta/",
            "lastModified_dt":"2018-04-05T21:39:48Z",
            "score":16.025692
          },
          {
            "type":["article"],
            "description":["Reposted from the RHEL blog and written by Bhavna Sarathy."],
            "title":["Containerize RHEL 6 Applications to Run on RHEL 7 | Red Hat Developer"],
            "id":"https://developers.redhat.com/blog/2014/10/14/containerize-rhel-6-applications-to-run-on-rhel-7/",
            "lastModified_dt":"2014-10-14T11:41:55Z",
            "score":15.595551
          },
          {
            "type":["article"],
            "description":["Of course RHEL 8 has Python, both Python 3 and 2. Changes in RHEL 8 such as platform python and application streams improve the Python experience in RHEL."],
            "title":["What, No Python in RHEL 8 Beta? | Red Hat Developer"],
            "id":"https://developers.redhat.com/blog/2018/11/27/what-no-python-in-rhel-8-beta/",
            "lastModified_dt":"2018-12-19T16:42:09Z",
            "score":15.235154
          },
          {
            "type":["article"],
            "description":["Get started developing with Perl 5.16 on Red Hat Enterprise Linux in under 10 minutes.\n\nIntroduction and Prerequisites\n\nIn this tutorial, you will see how to get started with Perl development on Red Hat Enterprise Linux by creating a simple Hello World application. The tutorial should take five to ten minutes to complete.\n\nOn Red Hat Enterprise Linux, Perl is installed by default. You can skip directly to the \"Your First Application\" step, or continue reading to learn more about installing and maintaining software packages."],
            "title":["Build your first application native Perl on RHEL 6 or RHEL 7 | Red Hat Developer"],
            "id":"https://developers.redhat.com/articles/using-native-perl-rhel-6-or-rhel-7/",
            "lastModified_dt":"2022-01-07T11:53:34Z",
            "score":14.433342
          },{"type":["article"],"description":["Who Goes There? Identity Management in Red Hat Enterprise Linux 7 Beta | Red Hat Enterprise Linux Blog.\nby Ellen Newlands, Red Hat."],"title":["From RHEL Blog | Who Goes There? Identity Management in RHEL 7 Beta | Red Hat Developer"],"id":"https://developers.redhat.com/blog/2014/01/21/repost-who-goes-there-id-mgmt-rhel7/","lastModified_dt":"2014-01-21T08:46:40Z","score":14.433342},{"type":["web_page"],"description":["OpenJDK developer & RHEL package owner"],"title":["Andrew Hughes | Red Hat Developer"],"id":"https://developers.redhat.com/author/andrew-hughes/","lastModified_dt":"2021-05-13T17:43:32Z","score":14.342632},{"type":["web_page"],"description":["RHEL 8 Quick Install - VirtualBox"],"title":["RHEL 8 Quick Install - VirtualBox | Red Hat Developer"],"id":"https://developers.redhat.com/rhel8/install-rhel8-vbox/v3/","lastModified_dt":"2021-12-20T10:56:55Z","score":14.342632},{"type":["article"],"description":["Install Python on RHEL 8"],"title":["Hello World - Python on RHEL 8 | Red Hat Developer"],"id":"https://developers.redhat.com/rhel8/hw/python/","lastModified_dt":"2020-11-19T03:48:18Z","score":14.342632},{"type":["product"],"description":["Download Software Collections for RHEL"],"title":["Software Collections Download | Red Hat Developer"],"id":"https://developers.redhat.com/products/softwarecollections/download/","lastModified_dt":"2022-01-10T14:47:28Z","score":14.342632}
        ]
      },
      "responseHeader":{
        "zkConnected":true,
        "status":0,
        "QTime":1,
        "params":{
          "facet.field":["type","rhd_taxonomy_product","rhd_taxonomy_product_line","rhd_taxonomy_topic"],
          "f.rhd_taxonomy_product_line.facet.missing":"false",
          "hl":"true",
          "lw.pipelineId":"developers_collection",
          "f.rhd_taxonomy_topic.facet.missing":"false",
          "fl":["id,score,description,title,type","score","title","description","type","id","lastModified_dt"],
          "start":"0",
          "f.type.facet.mincount":"1",
          "isFusionQuery":"true",
          "f.rhd_taxonomy_product.facet.mincount":"1",
          "sort":"score desc",
          "f.rhd_taxonomy_product_line.facet.mincount":"1",
          "rows":"10",
          "fusionQueryId":"A95OQQjogR",
          "q":"rhel",
          "defType":"edismax",
          "qf":["title^3.0","description^2.5","body^2.0","rhd_taxonomy_product^5.0","rhd_taxonomy_topic^3.0"],
          "f.rhd_taxonomy_product.facet.missing":"false",
          "f.rhd_taxonomy_topic.facet.mincount":"1",
          "context":"app:developers",
          "hl.fl":"description",
          "f.type.facet.missing":"false",
          "facet":"true"
        },"totalTime":5},
        "highlighting":{"https://developers.redhat.com/blog/2015/03/11/introducing-the-rhel-container-for-rhel-atomic-host/":{},
        "https://developers.redhat.com/blog/2013/10/08/rhel-5-10ga-6-5beta/":{},"https://developers.redhat.com/blog/2014/10/14/containerize-rhel-6-applications-to-run-on-rhel-7/":{"description":["Reposted from the <em>RHEL</em> blog and written by Bhavna Sarathy."]},"https://developers.redhat.com/blog/2018/11/27/what-no-python-in-rhel-8-beta/":{"description":["Of course <em>RHEL</em> 8 has Python, both Python 3 and 2. Changes in <em>RHEL</em> 8 such as platform python and"]},"https://developers.redhat.com/articles/using-native-perl-rhel-6-or-rhel-7/":{},"https://developers.redhat.com/blog/2014/01/21/repost-who-goes-there-id-mgmt-rhel7/":{},"https://developers.redhat.com/author/andrew-hughes/":{"description":["OpenJDK developer & <em>RHEL</em> package owner"]},"https://developers.redhat.com/rhel8/install-rhel8-vbox/v3/":{"description":["<em>RHEL</em> 8 Quick Install - VirtualBox"]},"https://developers.redhat.com/rhel8/hw/python/":{"description":["Install Python on <em>RHEL</em> 8"]},"https://developers.redhat.com/products/softwarecollections/download/":{"description":["Download Software Collections for <em>RHEL</em>"]}},"facet_counts":{"facet_queries":{},
        "facet_fields":{
          "type":["article",817,"web_page",141,"product",23,"videos",11,"books",5,"interactive_tutorials",2],
        "rhd_taxonomy_product":["rhel",608,"red hat software collections",115,"red hat openshift container platform",87,"red hat openshift",86,"unspecified",81,"developer toolset",80,"amq",31,"container development kit",29,"red hat codeready studio",25,"openshift runtimes",24,"red hat jboss enterprise application platform",21,"fuse",20,"red hat codeready containers",19,"rhel for sap solutions",18,"red hat codeready workspaces",17,"jboss data virtualization",16,"mobile application platform",16,"rhel coreos",16,"3scale api management",15,"ansible automation platform",15,"decision manager",15,"openshift cloud functions",15,"process automation manager",15,"red hat codeready linux builder",15,"red hat openshift pipelines",15,"vscode plugins",15,"codeready toolchain",14,"openshift container storage",14,"red hat data grid",14,"red hat jboss web server",14,"openshift.io",12,"migration toolkit for applications",11,"red hat build of openjdk",9,"developer sandbox for red hat openshift",5,"red hat advanced cluster management for kubernetes",5,"red hat advanced cluster security for kubernetes",5,"identity management",4,"openshift connector",4,"openshift developer console",4,"red hat openshift data foundation",4,"red hat openshift data science",4,"red hat openshift gitops",4,"red hat openshift local",4,"red hat openshift serverless",4,"red hat openshift service mesh",4,"red hat single sign-on",4,"rhoam (red hat openshift api management)",4,"rhosak (red hat openshift streams for apache kafka)",4,"cloud services - application services",3,"helm",3,"odo",3,"red hat application studio",3,"red hat build of eclipse vert.x",3,"red hat build of node.js",3,"red hat build of quarkus.",3,"red hat ceph storage",3,"red hat codeready dependency analytics",3,"red hat directory server",3,"red hat quay",3,"red hat support for spring boot",3,"service binding operator",3],
        "rhd_taxonomy_product_line":["rhel",141,"openshift",44,"red hat runtimes",24,"codeready",13,"red hat process automation",12,"red hat integration",11],
        "rhd_taxonomy_topic":["linux",625,"containers",199,"developer tools",153,"kubernetes",152,"java",93,".net",82,"devops",81,"c",72,"security",72,"unspecified",68,"open source",58,"c++",57,"microservices",44,"python",44,"ci/cd",43,"openshift",39,"ai/ml",26,"c#",22,"go",19,"node.js",17,"quarkus",17,"secure coding",17,"api management",16,"event-driven",16,"operators",15,"php",14,"edge",13,"spring boot",13,"ides",10,"automation",9,"compilers",9,"ruby",9,"serverless",9,"javascript",8,"service mesh",8,"data science",7,"devsecops",5,"kafka",5,"gitops",4,"helm",4,"ui/ux",3,"performance",2,"programming languages",1,"rust",1,"stream processing",1]},
        "facet_ranges":{},
        "facet_intervals":{},
        "facet_heatmaps":{}
      }
    });
  })

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
