const { Given, When, Then } = require('@cucumber/cucumber');
const homeobject = require('../pageobjects/Home.page');
const catalogobject = require('../pageobjects/Catalog.page');
const checkoutobject = require('../pageobjects/Checkout.page');


Given(/^User is on Home page$/,()=>{
    homeobject.open(); 
    homeobject.verifyCurrentPage();
});

When(/^User clicks search item field$/,()=>{
    catalogobject.clickSearchItemField();
});

When(/^User types iPhone$/,()=>{
    catalogobject.typeSearchFieldIphone();
});

When(/^User clicks search button$/,()=>{
    catalogobject.clickSearchButton();
});

Then(/^item is shown in search results$/,()=>{
    catalogobject.verifySearchResult();
});


Then(/^User moves to Catalog page$/,()=>{
    catalogobject.verifyCatalogPage();
})



