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
    ctx.response.body=JSON.stringify({"response":{"numFound":999,"start":0,"maxScore":16.025692,"docs":[{"type":["article"],"description":["Theriseofthepurpose-builtLinuxdistribution\nRecently,severalpurpose-builtdistributionshavebeencreatedspecificallytorunLinuxcontainers.Thereseemtobemorepoppingupeveryday."],"title":["Introducingthe\"rhel-tools\"forRHELAtomicHost|RedHatDeveloper"],"id":"https://developers.redhat.com/blog/2015/03/11/introducing-the-rhel-container-for-rhel-atomic-host/","lastModified_dt":"2018-04-06T08:45:44Z","score":16.025692},{"type":["article"],"description":["HereareafewinterestingexcerptsfromtherecentRedHatEnterpriseLinux5.10announcementforgeneralavailabilityandtoday'sRedHatEnterpriseLinux6.5betaannouncement."],"title":["RHEL5.10GenerallyAvailable,RHEL6.5inBeta!|RedHatDeveloper"],"id":"https://developers.redhat.com/blog/2013/10/08/rhel-5-10ga-6-5beta/","lastModified_dt":"2018-04-05T21:39:48Z","score":16.025692},{"type":["article"],"description":["RepostedfromtheRHELblogandwrittenbyBhavnaSarathy."],"title":["ContainerizeRHEL6ApplicationstoRunonRHEL7|RedHatDeveloper"],"id":"https://developers.redhat.com/blog/2014/10/14/containerize-rhel-6-applications-to-run-on-rhel-7/","lastModified_dt":"2014-10-14T11:41:55Z","score":15.595551},{"type":["article"],"description":["OfcourseRHEL8hasPython,bothPython3and2.ChangesinRHEL8suchasplatformpythonandapplicationstreamsimprovethePythonexperienceinRHEL."],"title":["What,NoPythoninRHEL8Beta?|RedHatDeveloper"],"id":"https://developers.redhat.com/blog/2018/11/27/what-no-python-in-rhel-8-beta/","lastModified_dt":"2018-12-19T16:42:09Z","score":15.235154},{"type":["article"],"description":["GetstarteddevelopingwithPerl5.16onRedHatEnterpriseLinuxinunder10minutes.\n\nIntroductionandPrerequisites\n\nInthistutorial,youwillseehowtogetstartedwithPerldevelopmentonRedHatEnterpriseLinuxbycreatingasimpleHelloWorldapplication.Thetutorialshouldtakefivetotenminutestocomplete.\n\nOnRedHatEnterpriseLinux,Perlisinstalledbydefault.Youcanskipdirectlytothe\"YourFirstApplication\"step,orcontinuereadingtolearnmoreaboutinstallingandmaintainingsoftwarepackages."],"title":["BuildyourfirstapplicationnativePerlonRHEL6orRHEL7|RedHatDeveloper"],"id":"https://developers.redhat.com/articles/using-native-perl-rhel-6-or-rhel-7/","lastModified_dt":"2022-01-07T11:53:34Z","score":14.433342},{"type":["article"],"description":["WhoGoesThere?IdentityManagementinRedHatEnterpriseLinux7Beta|RedHatEnterpriseLinuxBlog.\nbyEllenNewlands,RedHat."],"title":["FromRHELBlog|WhoGoesThere?IdentityManagementinRHEL7Beta|RedHatDeveloper"],"id":"https://developers.redhat.com/blog/2014/01/21/repost-who-goes-there-id-mgmt-rhel7/","lastModified_dt":"2014-01-21T08:46:40Z","score":14.433342},{"type":["web_page"],"description":["OpenJDKdeveloper&RHELpackageowner"],"title":["AndrewHughes|RedHatDeveloper"],"id":"https://developers.redhat.com/author/andrew-hughes/","lastModified_dt":"2021-05-13T17:43:32Z","score":14.342632},{"type":["web_page"],"description":["RHEL8QuickInstall-VirtualBox"],"title":["RHEL8QuickInstall-VirtualBox|RedHatDeveloper"],"id":"https://developers.redhat.com/rhel8/install-rhel8-vbox/v3/","lastModified_dt":"2021-12-20T10:56:55Z","score":14.342632},{"type":["article"],"description":["InstallPythononRHEL8"],"title":["HelloWorld-PythononRHEL8|RedHatDeveloper"],"id":"https://developers.redhat.com/rhel8/hw/python/","lastModified_dt":"2020-11-19T03:48:18Z","score":14.342632},{"type":["product"],"description":["DownloadSoftwareCollectionsforRHEL"],"title":["SoftwareCollectionsDownload|RedHatDeveloper"],"id":"https://developers.redhat.com/products/softwarecollections/download/","lastModified_dt":"2022-01-10T14:47:28Z","score":14.342632}]},"responseHeader":{"zkConnected":true,"status":0,"QTime":1,"params":{"facet.field":["type","rhd_taxonomy_product","rhd_taxonomy_product_line","rhd_taxonomy_topic"],"f.rhd_taxonomy_product_line.facet.missing":"false","hl":"true","lw.pipelineId":"developers_collection","f.rhd_taxonomy_topic.facet.missing":"false","fl":["id,score,description,title,type","score","title","description","type","id","lastModified_dt"],"start":"0","f.type.facet.mincount":"1","isFusionQuery":"true","f.rhd_taxonomy_product.facet.mincount":"1","sort":"scoredesc","f.rhd_taxonomy_product_line.facet.mincount":"1","rows":"10","fusionQueryId":"A95OQQjogR","q":"rhel","defType":"edismax","qf":["title^3.0","description^2.5","body^2.0","rhd_taxonomy_product^5.0","rhd_taxonomy_topic^3.0"],"f.rhd_taxonomy_product.facet.missing":"false","f.rhd_taxonomy_topic.facet.mincount":"1","context":"app:developers","hl.fl":"description","f.type.facet.missing":"false","facet":"true"},"totalTime":5},"highlighting":{"https://developers.redhat.com/blog/2015/03/11/introducing-the-rhel-container-for-rhel-atomic-host/":{},"https://developers.redhat.com/blog/2013/10/08/rhel-5-10ga-6-5beta/":{},"https://developers.redhat.com/blog/2014/10/14/containerize-rhel-6-applications-to-run-on-rhel-7/":{"description":["Repostedfromthe<em>RHEL</em>blogandwrittenbyBhavnaSarathy."]},"https://developers.redhat.com/blog/2018/11/27/what-no-python-in-rhel-8-beta/":{"description":["Ofcourse<em>RHEL</em>8hasPython,bothPython3and2.Changesin<em>RHEL</em>8suchasplatformpythonand"]},"https://developers.redhat.com/articles/using-native-perl-rhel-6-or-rhel-7/":{},"https://developers.redhat.com/blog/2014/01/21/repost-who-goes-there-id-mgmt-rhel7/":{},"https://developers.redhat.com/author/andrew-hughes/":{"description":["OpenJDKdeveloper&<em>RHEL</em>packageowner"]},"https://developers.redhat.com/rhel8/install-rhel8-vbox/v3/":{"description":["<em>RHEL</em>8QuickInstall-VirtualBox"]},"https://developers.redhat.com/rhel8/hw/python/":{"description":["InstallPythonon<em>RHEL</em>8"]},"https://developers.redhat.com/products/softwarecollections/download/":{"description":["DownloadSoftwareCollectionsfor<em>RHEL</em>"]}},"facet_counts":{"facet_queries":{},"facet_fields":{"type":["article",817,"web_page",141,"product",23,"videos",11,"books",5,"interactive_tutorials",2],"rhd_taxonomy_product":["rhel",608,"redhatsoftwarecollections",115,"redhatopenshiftcontainerplatform",87,"redhatopenshift",86,"unspecified",81,"developertoolset",80,"amq",31,"containerdevelopmentkit",29,"redhatcodereadystudio",25,"openshiftruntimes",24,"redhatjbossenterpriseapplicationplatform",21,"fuse",20,"redhatcodereadycontainers",19,"rhelforsapsolutions",18,"redhatcodereadyworkspaces",17,"jbossdatavirtualization",16,"mobileapplicationplatform",16,"rhelcoreos",16,"3scaleapimanagement",15,"ansibleautomationplatform",15,"decisionmanager",15,"openshiftcloudfunctions",15,"processautomationmanager",15,"redhatcodereadylinuxbuilder",15,"redhatopenshiftpipelines",15,"vscodeplugins",15,"codereadytoolchain",14,"openshiftcontainerstorage",14,"redhatdatagrid",14,"redhatjbosswebserver",14,"openshift.io",12,"migrationtoolkitforapplications",11,"redhatbuildofopenjdk",9,"developersandboxforredhatopenshift",5,"redhatadvancedclustermanagementforkubernetes",5,"redhatadvancedclustersecurityforkubernetes",5,"identitymanagement",4,"openshiftconnector",4,"openshiftdeveloperconsole",4,"redhatopenshiftdatafoundation",4,"redhatopenshiftdatascience",4,"redhatopenshiftgitops",4,"redhatopenshiftlocal",4,"redhatopenshiftserverless",4,"redhatopenshiftservicemesh",4,"redhatsinglesign-on",4,"rhoam(redhatopenshiftapimanagement)",4,"rhosak(redhatopenshiftstreamsforapachekafka)",4,"cloudservices-applicationservices",3,"helm",3,"odo",3,"redhatapplicationstudio",3,"redhatbuildofeclipsevert.x",3,"redhatbuildofnode.js",3,"redhatbuildofquarkus.",3,"redhatcephstorage",3,"redhatcodereadydependencyanalytics",3,"redhatdirectoryserver",3,"redhatquay",3,"redhatsupportforspringboot",3,"servicebindingoperator",3],"rhd_taxonomy_product_line":["rhel",141,"openshift",44,"redhatruntimes",24,"codeready",13,"redhatprocessautomation",12,"redhatintegration",11],"rhd_taxonomy_topic":["linux",625,"containers",199,"developertools",153,"kubernetes",152,"java",93,".net",82,"devops",81,"c",72,"security",72,"unspecified",68,"opensource",58,"c++",57,"microservices",44,"python",44,"ci/cd",43,"openshift",39,"ai/ml",26,"c#",22,"go",19,"node.js",17,"quarkus",17,"securecoding",17,"apimanagement",16,"event-driven",16,"operators",15,"php",14,"edge",13,"springboot",13,"ides",10,"automation",9,"compilers",9,"ruby",9,"serverless",9,"javascript",8,"servicemesh",8,"datascience",7,"devsecops",5,"kafka",5,"gitops",4,"helm",4,"ui/ux",3,"performance",2,"programminglanguages",1,"rust",1,"streamprocessing",1]},"facet_ranges":{},"facet_intervals":{},"facet_heatmaps":{}}});
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
