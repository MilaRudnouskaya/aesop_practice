// trying out stuff ovah here

const getMethods = (obj) => Object.getOwnPropertyNames(obj).filter(p => typeof obj[p] === 'function');


describe("Damascan rose PDP", function(){
    it("should get the title right", function(){
        browser.url('/pdp-digital-gift-card.html');

        var title = browser.getTitle();
        // browser.debug();

        expect(title).to.equal('Aēsop');


        var productTitle = browser.getText(".PDPHeaderCommonSummary-title");
        expect(productTitle).to.equal('Aesop Digital Gift Card');

        browser.pause(5000);


        browser.click("/html/body/div[3]/form/div/div[1]/div[2]/div[2]/div[1]/div/div/label/input");
     

        browser.setValue("/html/body/div[3]/form/div/div[1]/div[2]/div[2]/div[1]/div/div/label/input", "100");

        browser.click("body > div.Aesop > form > div > div.PDPHeader-wrapper > div.PDPHeader-productInfoWrapper > div.PDPHeaderGiftCard-content > div.PDPHeaderCommonCTA.PDPHeaderGiftCard-cta > button")
        browser.debug();

     
        // browser.click('.PDPHeaderCommonCTA.PDPHeader-cta--smallMedium button div.Btn-content span.Btn-label:nth-child(1)');
        // browser.debug();


        // var alertBanner = browser.getText(".NavBarAlertBanner");
        // browser.waitForExist(alertBanner);
        // expect(alertBanner).to.contain('added to your cart');


    });
});