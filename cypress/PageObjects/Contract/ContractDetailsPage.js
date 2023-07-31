export class contractDetails 
{
    elements = {
        contractTitleOnLeft :() => cy.get('#fm-space-title-main'),
        contractNameField :() => cy.get('#input-name'),
        contractTypeField :() => cy.get(':nth-child(3) > :nth-child(3) > :nth-child(1) > .e-input-group'),
        packageField :() => cy.get(':nth-child(4) > :nth-child(2) > .e-input-group'),
        contractRenewalTypeField :() => cy.get('#input-contractrenewaltype > .e-input-group'),
        durationField :() => cy.get('#duration')
    }

    getContractNameOnTopLeft() 
    {
        return this.elements.contractTitleOnLeft();
    }

    getContractName()
    {
        return this.elements.contractNameField();
    }

    getContractType()
    {
        return this.elements.contractTypeField();
    }

    getPackageName()
    {
        return this.elements.packageField();
    }

    getContractRenewalType()
    {
        return this.elements.contractRenewalTypeField();
    }

    getDuration()
    {
        return this.elements.durationField();
    }
}