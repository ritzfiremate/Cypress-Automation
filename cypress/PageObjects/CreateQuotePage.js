class CreateQuotePage{

    elements = { 
        BEDropDown : () => cy.get(':nth-child(1) > .form-col-4 > .e-input-group'),
        BEDropDownList : () => cy.get('.e-ddl> .e-content >.e-list-parent >.e-list-item'),
        CustomerDropDown : () => cy.get(':nth-child(3) > .form-col-4 > .e-input-group'),
        CustomerInputFilter : () => cy.get('.e-input-filter'),
        PropertyDropDown : () => cy.get(':nth-child(4) > .form-col-4 > .e-input-group'),
        PropertyInputFilter : () => cy.get('.e-input-filter'),
        QuoteCreateButton : () => cy.get('.e-btn-content'),        
    }
    
    ClickBEDropDown()
    {
        return this.elements.BEDropDown().click();
    }

    SelectBEFromList(BEName)
    {
        return this.elements.BEDropDownList().contains(BEName).click();
    }

    ClickCustomerDropDown()
    {
        return this.elements.CustomerDropDown().click();
    }

    EnterCustomerNameInFilter(CustomerName)
    {
        return this.elements.CustomerInputFilter().type(CustomerName).type('{enter}');
    }

    ClickPropertyDropDown()
    {
        return this.elements.PropertyDropDown().click();
    }

    EnterPropertyNameInFilter(PropertyName)
    {
        return this.elements.CustomerInputFilter().type(PropertyName).type('{enter}');
    }

    ClickOnCreateQuoteButton()
    {
        return this.elements.QuoteCreateButton().contains("Create").click({force: true});
    }

}

export default CreateQuotePage;
