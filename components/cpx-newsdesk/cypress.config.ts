import { defineConfig } from "cypress";

export default defineConfig({
    includeShadowDom: true,
    chromeWebSecurity: false,
    video: false,
    videoUploadOnPasses: false,
    numTestsKeptInMemory:0,
    pageLoadTimeout: 100000,
    defaultCommandTimeout: 50000,
    taskTimeout: 100000,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    viewportWidth: 1920,
    viewportHeight: 1080,
    modifyObstructiveCode: false,
    e2e: {
      experimentalMemoryManagement: true,
      // setupNodeEvents(on, config) {
      //   on('task', {
      //     log(message) {
      //       console.log(message)
        
      //       return null;
      //     }
      //     // implement node event listeners here
      //   }),
          
      //   on('before:browser:launch', (browser = {}, launchOptions) => {
      //     if (browser.displayName === 'Chrome' || browser.family==='chromium') {
      //       launchOptions.args.push('--disable-gpu')
      //       launchOptions.args.push("--disable-features=CrossSiteDocumentBlockingIfIsolating,CrossSiteDocumentBlockingAlways,IsolateOrigins,site-per-process");
      //       launchOptions.args.push('--disable-dev-shm-usage')
      //     }
          
      //     return launchOptions
      //   })
      //   require('cypress-grep/src/plugin')(config);
      //   return require('./cypress/plugins/index.js')(on, config)
      // },
      specPattern: ['test/**/**.cy.js']
    }
});

