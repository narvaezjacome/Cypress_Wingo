const { defineConfig } = require("cypress");

module.exports = defineConfig({

    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000,


  e2e: {
    setupNodeEvents(on, config) {
    },
    excludeSpectPattern:[
    "**/1-getting-started/*.js",
    "**/2-advanced-examples/*.js"
    ]
  }
});
