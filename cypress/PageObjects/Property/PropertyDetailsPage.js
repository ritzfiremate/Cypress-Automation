export class propertyDetails 
{
    elements = {
        propertyNameOnTopLeft : () => cy.get('#fm-space-title-main'),
        propertyNameField : () => cy.get('#property-name'),
        contractNameField : () => cy.get(':nth-child(1) > .form-col-2 > .e-input-group'),
        region : () => cy.get(':nth-child(6) > .form-col-1 > .e-input-group'),
        address : () => cy.get('#property-address1'),
        city : () => cy.get('#property-city'),
        state : () => cy.get('.wide-form > :nth-child(8) > :nth-child(1) > .e-input-group'),
        postCode : () => cy.get('#property-postcode')
    }

    getPropertyNameOnTopLeft()
    {
      return this.elements.propertyNameOnTopLeft();  
    }

    getPropertyName()
    {
        return this.elements.propertyNameField();
    }

    getContractName()
    {
        return this.elements.contractNameField();
    }

    getRegion()
    {
        return this.elements.region();
    }

    getAddress()
    {
        return this.elements.address();
    }

    getCity()
    {
        return this.elements.city();
    }

    getState()
    {
        return this.elements.state();
    }
     
    getPostCode()
    {
        return this.elements.postCode();
    }
}