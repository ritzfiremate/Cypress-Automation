export class CreateContract
{

    elements = {
        customerNameDropdown : () => cy.get(':nth-child(1) > .form-col-4 > .e-input-group'),
        customerNameField : () => cy.get('.e-input-filter'),
        contractNameField : ()=> cy.get('#input-name'),
        contractTypeDropdown : () => cy.get('#fm-new-contract-form > :nth-child(3) > :nth-child(1) > .e-input-group'),
        contractRenewalTypeDropdown :() => cy.get('#fm-new-contract-form > :nth-child(5) > :nth-child(1) > .e-input-group'),
        durationField : () => cy.get('#duration'),
        packageDropdown : () => cy.get(':nth-child(3) > :nth-child(2) > .e-input-group'),
        createButton : () => cy.get('#fm-modal-complete'),
        cancelButton : () => cy.get('.dialog-with-ftr > .dialog-ftr > :nth-child(2) > .e-primary')
    }

    selectContractFromDropdown()
    {
        cy.get('.px-4').click()
        cy.get('#fm-menu-create > .fm-dropdown > :nth-child(3) > :nth-child(4)').click()
    }

    enterCustomerName(CustName)
    {
        this.elements.customerNameDropdown().click();
        this.elements.customerNameField().type(CustName);
        cy.contains(CustName).click();
    }

    enterContractName(ContractName) 
    {
        this.elements.contractNameField().type(ContractName);
    }

    enterContractType(ContractType)
    {
        this.elements.contractTypeDropdown().click();
        cy.contains(ContractType).click();
        this.elements.contractTypeDropdown().click();
    }

    enterPackage(Package)
    {
        this.elements.packageDropdown().click();
        cy.contains(Package).click();
        this.elements.packageDropdown().click();
    }

    enterDuration(duration) 
    {
        this.elements.durationField().click().clear();
        this.elements.durationField().click().type(duration);
    }

    enterContractRenewalType(ContractRenewalType)
    {
        this.elements.contractRenewalTypeDropdown().click();
        cy.contains(ContractRenewalType).click();
    }

    CreateContractButton()
    {
        this.elements.createButton().click({force:true})
    }

    CancelButton()
    {
        this.elements.cancelButton().click({force: true})

    }
}