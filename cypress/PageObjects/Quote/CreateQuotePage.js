export class CreateQuotePage{

    elements = { 
        bEDropDown : () => cy.get(':nth-child(1) > .form-col-4 > .e-input-group'),
        bEDropDownList : () => cy.get('.e-ddl> .e-content >.e-list-parent >.e-list-item'),
        customerDropDown : () => cy.get(':nth-child(3) > .form-col-4 > .e-input-group'),
        customerInputFilter : () => cy.get('.e-input-filter'),
        propertyDropDown : () => cy.get(':nth-child(4) > .form-col-4 > .e-input-group'),
        propertyInputFilter : () => cy.get('.e-input-filter'),
        quoteCreateButton : () => cy.get('.e-btn-content'),        
    }
    
    clickBEDropDown()
    {
        return this.elements.bEDropDown().click();
    }

    selectBEFromList(BEName)
    {
        return this.elements.bEDropDownList().contains(BEName).click();
    }

    clickCustomerDropDown()
    {
        return this.elements.customerDropDown().click();
    }

    enterCustomerNameInFilter(CustomerName)
    {
        return this.elements.customerInputFilter().type(CustomerName).type('{enter}');
    }

    clickPropertyDropDown()
    {
        return this.elements.propertyDropDown().click();
    }

    enterPropertyNameInFilter(PropertyName)
    {
        return this.elements.customerInputFilter().type(PropertyName).type('{enter}');
    }

    clickOnCreateQuoteButton()
    {
        return this.elements.quoteCreateButton().contains("Create").click({force: true});
    }

}
