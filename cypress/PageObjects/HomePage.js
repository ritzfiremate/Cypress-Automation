class HomePage
{
    elements = { 
        CreateDropDown : () => cy.get('.px-4 > .ml-2 > svg'),
        CreateCustomerMenu : () =>  cy.get('#fm-menu-create > .fm-dropdown > :nth-child(3) > :nth-child(3)'),
        CreateJobMenu : () => cy.get(':nth-child(1) > :nth-child(2) > .fm-list-item'),
        CreateQuoteMenu : () => cy.get(':nth-child(2) > :nth-child(3) > .fm-list-item'),
        UserMenu : () => cy.get('#usermenu'),
        LogOutMenu : () => cy.get('#logout-menu-item')
    }

    ClickCreateDrowndown()
    {
        return this.elements.CreateDropDown().click();
    }

    clickCreateCustomer() 
    {
        return this.elements.CreateCustomerMenu().click();
    }

    ClickCreateJobs()
    {
        return this.elements.CreateJobMenu().click();
    }

    ClickCreateQuote()
    {
        return this.elements.CreateQuoteMenu().click();
    }

    ClickUserMenu()
    {
        return this.elements.UserMenu().click();
    }

    ClickLogOut()
    {
        return this.elements.LogOutMenu().click();
    }
}

export default HomePage;