export class QuoteDetailsPage
{
    elements = { 
        propertyName : () => cy.get(':nth-child(2) > .mt-2 > :nth-child(3)'),        
    }

    getPropertyName()
    {
        return this.elements.propertyName();
    }

}
