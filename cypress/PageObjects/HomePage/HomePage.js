export class HomePage
{
    elements = { 
        createDropDown : () => cy.get('.px-4 > .ml-2 > svg'),
        createCustomerMenu : () =>  cy.get('#fm-menu-create > .fm-dropdown > :nth-child(3) > :nth-child(3)'),
        createJobMenu : () => cy.get(':nth-child(1) > :nth-child(2) > .fm-list-item'),
        createQuoteMenu : () => cy.get(':nth-child(2) > :nth-child(3) > .fm-list-item'),
        userMenu : () => cy.get('#usermenu'),
        logOutMenu : () => cy.get('#logout-menu-item')
    }

    clickCreateDrowndown()
    {
        return this.elements.createDropDown().click();
    }

    clickCreateCustomer() 
    {
        return this.elements.createCustomerMenu().click();
    }

    clickCreateJobs()
    {
        return this.elements.createJobMenu().click();
    }

    clickCreateQuote()
    {
        return this.elements.createQuoteMenu().click();
    }

    clickUserMenu()
    {
        return this.elements.userMenu().click();
    }

    clickLogOut()
    {
        return this.elements.logOutMenu().click();
    }
}

