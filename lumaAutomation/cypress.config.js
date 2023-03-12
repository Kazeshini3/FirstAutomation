const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    email: "tomecosabs@gmail.com",
    pass: "jaAJ2v5LJFcbn98",
    homeUrl: "https://magento.softwaretestingboard.com/",
    
    ordersUrl:"https://magento.softwaretestingboard.com/sales/guest/form/",
    orderNumber:"000020362",
    zip:"jjjjjj",
    total:"59.00",
    lastName:"Pessoa1"
  },
});
