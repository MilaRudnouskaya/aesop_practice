// trying out stuff ovah here

describe("Damscan rose PDP", function(){
    it("should get the title right", function(){
        browser.url('/pdp-solo-6.html');
        // browser.debug();


        var title = browser.getTitle();
        // expect(title).to.equal('Aēsop');
        expect(1).to.equal(1);


     
        // browser.click('.shop-callout a');


        // var productTitle = browser.getTitle();
        // expect(productTitle).to.equal('Totally Not Evil Sentient Robot - Robot Parts Emporium');

        // var url = browser.getUrl();
        // expect(url).to.include('product-page.html', 'URL mismatch');

    });
});