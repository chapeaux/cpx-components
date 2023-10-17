let eddlComponentsLoaded = false;

function spyOnAddEventListener(win) {
  const addListener = win.EventTarget.prototype.addEventListener;
  win.EventTarget.prototype.addEventListener = function (name) {
    if (name === "newsflash") {
      eddlComponentsLoaded = true;
    }
    return addListener.apply(this, arguments);
  }
}

function waitForComponentRegistration(win) {
  return new Cypress.Promise((resolve, reject) => {
    const isReady = () => {
      const reporter = win.customElements.get('cpx-reporter');
      if (reporter) {
        console.log("REPORTER FOUND", reporter);
        return resolve();
      }
      setTimeout(isReady, 0);
    }
    isReady();
  });
}

function waitForNewsflash(win) {
  return new Cypress.Promise((resolve, reject) => {
    const isReady = () => {
      if (eddlComponentsLoaded) {
        return resolve();
      }
      setTimeout(isReady, 0);
    }
    isReady();
  });
}

// Cypress test taken from RHD
context("Test cases related to EDDL", function () {
  const url = 'https://localhost:8443/cpx-newsdesk/demo/auth.html';
  beforeEach(() => {
    cy.visit(url, {
      onBeforeLoad: spyOnAddEventListener
    }).then(waitForComponentRegistration).then( (win) => { 
      win.addEventListener('newsflash', e => console.log('CYPRESS NEWSFLASH'));
      cy.spy(win, addEventListener).as('eventListener');
    })
  })
  
  it("See if EDDL Stuff is working", () => {
    cy.get('@eventListener').should('have.been.calledWith', 'newsflash');
    //expect(win.appEventData.length).to.equal(3);
  });
    
    // cy.window().then(function (win) {
    //     const data = win.appEventData
    //     console.log(data);
    //     expect(data).not.include("Error Message Presented")
    // });
  
//   it("Verify if window.appEventData shows 'Error Message Presented' item for invalid pages",() => {
//     cy.visit(url, { failOnStatusCode: false })    
//     EDDL_Page_Objects.get_Cpx_Reporter_Error_Message().should("exist").and("not.be.visible")
//     cy.visit(url + "/admin/content", { failOnStatusCode: false })
//     EDDL_Page_Objects.get_Cpx_Reporter_Error_Message().should("exist").and("not.be.visible")
//   })
/*
  it("Verify if window.appEventData not shows 'Error Message Presented' item for valid page", function () {
    this.path.rhd_pages.forEach(rhd_pages => {
        cy.visit(url + rhd_pages)
        cy.window().then(function (win) {
            const data = win.appEventData
            expect(data).not.include("Error Message Presented")
        })
    })
  })

  it("Verify if the 'page name' Property is shown in the 'page load started' item for invalid pages", function(){
    cy.visit(url + "/abc", { failOnStatusCode: false })
    cy.window().then(function (win) {
        const data = win.appEventData[0].page.pageName;
        expect(data).to.equal("rhd|404|abc")
    })
    cy.visit(url + "/admin/content", { failOnStatusCode: false })
    cy.window().then(function (win) {
        const data = win.appEventData[0].page.pageName;
        expect(data).to.equal("rhd|404|admin/content")
    })
    cy.visit(url + "/abc/def", { failOnStatusCode: false })
    cy.window().then(function (win) {
        const data = win.appEventData[0].page.pageName;
        expect(data).to.equal("rhd|404|abc/def")
    })
    cy.visit(url + "/products/red-hat-openshift-service-on-aws/overvie", { failOnStatusCode: false })
    cy.window().then(function (win) {
        const data = win.appEventData[0].page.pageName;
        expect(data).to.equal("rhd|404|products/red-hat-openshift-service-on-aws/overvie")
    })

  })

  it("Verify if the 'page name' Property is shown in the 'page load started' item for valid pages", function(){
    this.path.rhd_pages.forEach(rhd_pages => {
        cy.visit(url + rhd_pages)
        cy.window().then(function (win) {
            cy.log(win)
            if(win.appEventData[0].event == "Page Load Started")
            {
                const data = win.appEventData[0].page.pageName;
                expect(data).not.null
            }
        
        })
    })
  })
  // incomplete RHDX-4044
  it.skip("Verify that EDDL analytics is working on Homepage", function(){
    cy.visit("https://developers.qa.redhat.com/"+"/products/ansible/overview") 
    EDDL_Page_Objects.get_Product_Link().click()
    //cy.url().should('include','/blog/2022/11/29/whats-new-ansible-automation-platform-23')
    //cy.visit("https://developers.qa.redhat.com/")
    //cy.get(".pfe-navigation__logo-image").eq(0).click({force:true})
    cy.window().then(function (win) {
        //Validating "Page Load Started" attribute
        expect(win.appEventData[0].event).equal("Page Load Started")
        expect(win.appEventData[0].page.analyticsTitle).not.null
        expect(win.appEventData[0].page.blogAuthor).not.null
        expect(win.appEventData[0].page.contentID).not.null
        expect(win.appEventData[0].page.contentType).not.null
        expect(win.appEventData[0].page.dataObject).not.null
        //expect(win.appEventData[0].meta.validationResult).not.null
        expect(win.appEventData[0].Prototype).not.null
        //Validating "User Detected" attribute
        expect(win.appEventData[1].event).equal("User Detected")
        expect(win.appEventData[1].user.custKey).not.null
        expect(win.appEventData[1].user.ebsAccountNumber).not.null
        expect(win.appEventData[1].user.accountIDType).not.null
        expect(win.appEventData[1].user.userID).not.null
        expect(win.appEventData[1].user.lastLoginDate).not.null
        //expect(win.appEventData[1].meta.validationResult).not.null
        //Validating "Page Load Completed"
        expect(win.appEventData[2].event).equal("Page Load Completed")
        expect(win.appEventData[2].meta.validationResult).not.null
    })

  })

  it("Verify 'Page Load Started' item in the window.appEventData object with anonymous user", function(){
    cy.visit(url)
    cy.window().then(function (win) {
        cy.log(win)
        if(win.appEventData[0].event == "Page Load Started")
        {
            const data1 = win.appEventData[0].page.pageName;
            expect(data1).equal("rhd|homepage")
            const data2 = win.appEventData[0].page.analyticsTitle;
            expect(data2).not.null
            const data3 = win.appEventData[0].page.cms;
            expect(data3).not.null
            const data4 = win.appEventData[0].page.pageStatus;
            expect(data4).not.null
            const data5 = win.appEventData[0].page.destinationURL;
            expect(data5).not.null
            const data6 = win.appEventData[0].page.cms;
            expect(data6).equal("RHD CMS 9")
        }
        
    })
  })

  it("Verify 'Page Load Started' item in the window.appEventData object with authenticated user", function(){
        cy.visit(url)
        Home_Page_Objects.get_Navbar_Login_Button().click({force: true})
        SSO_Login.sso_login(Cypress.env("CONTENT_ADMIN_UN"), Cypress.env("CONTENT_ADMIN_PWD"))
        cy.window().then(function (win) {
            cy.log(win)
            if(win.appEventData[0].event == "Page Load Started")
            {
                const data1 = win.appEventData[0].page.pageName;
                expect(data1).equal("rhd|homepage")
                const data2 = win.appEventData[0].page.analyticsTitle;
                expect(data2).not.null
                const data3 = win.appEventData[0].page.cms;
                expect(data3).not.null
                const data4 = win.appEventData[0].page.pageStatus;
                expect(data4).not.null
                const data5 = win.appEventData[0].page.destinationURL;
                expect(data5).not.null
                const data6 = win.appEventData[0].page.cms;
                expect(data6).equal("RHD CMS 9")
            }
            
        })
        Home_Page_Objects.get_Logout_Button().click({force: true})
    })

  it("Verify if 'page.pageInfo' attribute values are present in Product page.", function(){
        cy.visit(url+"products/rhel/overview")
        cy.window().then(function (win) {
            cy.log(win)
            if(win.appEventData[0].event == "Page Load Started")
            {
                const data1 = win.appEventData[0].page.pageName;
                expect(data1).equal("rhd|products|rhel|overview")
                const data2 = win.appEventData[0].page.analyticsTitle;
                expect(data2).equal("Red Hat Enterprise Linux")
                const data3 = win.appEventData[0].page.cms;
                expect(data3).not.null
                const data4 = win.appEventData[0].page.pageStatus;
                expect(data4).not.null
                const data5 = win.appEventData[0].page.destinationURL;
                expect(data5).not.null
                const data6 = win.appEventData[0].page.cms;
                expect(data6).equal("RHD CMS 9")
            }
        })
  })
  */
})
