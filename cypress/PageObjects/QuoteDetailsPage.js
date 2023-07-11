class QuoteDetailsPage
{
    elements = { 
        PropertyName : () => cy.get(':nth-child(2) > .mt-2 > :nth-child(3)'),        
    }

    GetPropertyName()
    {
        return this.elements.PropertyName();
    }

}

export default QuoteDetailsPage;
