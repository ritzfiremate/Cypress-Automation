export class CreateCustomer {
    
    /*selectCustomerFromDropdown() 
    {
        cy.get('.px-4').click()
        cy.get('#fm-menu-create > .fm-dropdown > :nth-child(3) > :nth-child(3)').click()
    }*/

    enterCustomerDetails(BEName, CustName, AcntRef, Phone, Email) 
    {
        cy.get(':nth-child(1) > .form-col-4 > .e-input-group').click()
        cy.contains(BEName).click()
        cy.get('#customer-name').type(CustName)
        cy.get('#customer-accountsref').type(AcntRef)
        cy.get('#customer-telephone').type(Phone)
        cy.get('#customer-alertemailaddress').type(Email)
    }

    createCustomerButton(){
        cy.get('#fm-modal-complete').click({force:true})
    }

    cancelButton(){
        cy.get('.dialog-with-ftr > .dialog-ftr > :nth-child(2) > .e-primary').click({force:true})
    }
}