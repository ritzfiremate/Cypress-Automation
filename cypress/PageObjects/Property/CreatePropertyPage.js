export class CreateProperty {

    selectPropertyFromDropdown() 
    {
        cy.get('.px-4').click()
        cy.get('#fm-menu-create > .fm-dropdown > :nth-child(3) > :nth-child(5)').click()
    }

    enterContractName(contractName)
    {
        cy.get(':nth-child(1) > .form-col-4 > .e-input-group').click()
        cy.get('.e-input-filter').type(contractName).click()
        cy.get('.e-item-focus').click()
    }

    enterPropertyName(propertyName) 
    {
        
        cy.get('#property-name').type(propertyName)
    }

    enterRegion(region) 
    {
        cy.get('#fm-new-property-form > :nth-child(2) > :nth-child(2) > .e-input-group').click()
        cy.get('.e-dropdownbase > .e-ul > .e-list-item').contains(region).click()
        cy.get('#fm-new-property-form > :nth-child(2) > :nth-child(2) > .e-input-group').click()
    }

    enterAddress(address)
    {
        cy.get('#property-address1').type(address)
    }

    enterCity(city)
    {
        cy.get('#property-city').type(city)
    }

    enterState(state)
    {
        cy.get('#fm-new-property-form > :nth-child(5) > :nth-child(1) > .e-input-group').click()
        cy.contains(state).click()
    }

    enterPostCode(postCode)
    {
        cy.wait(1000)
        cy.get('#property-postcode').type(postCode)
    }

    clickCreateButton() 
    {
        cy.get('#fm-modal-complete').click({force:true})
    }

    clickCancelButton()
    {
        cy.get('.dialog-with-ftr > .dialog-ftr > :nth-child(2) > .e-primary').click({force:true})
    }
}