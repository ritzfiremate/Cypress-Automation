export class CreateJobPage{

    elements = { 
        propertyDropDown : () => cy.get(':nth-child(1) > .form-col-4 > .e-input-group'),
        propertyInputFilter : () => cy.get('.e-input-filter'),
        jobOrderReference : () => cy.get('#job-orderref'),
        clientRequest : () => cy.get('.form-col-4 > .e-input-group').eq(2),
        jobCreateButton : () => cy.get('.e-control > .e-dlg-content >.dialog-with-ftr >.dialog-ftr > :nth-child(2)  > #fm-modal-complete > .e-btn-content').contains("Create"),
        
    }

    clickPropertyDropDown()
    {
        return this.elements.propertyDropDown().click();
    }

    enterPropertyNameInFilter(PropertyName)
    {
        return this.elements.propertyInputFilter().type(PropertyName).type('{enter}');
    }

    enterJobOrderReference(JobOrderRef)
    {
        return this.elements.jobOrderReference().type(JobOrderRef);
    }

    enterClientRequest(ClientRequest)
    {
        return this.elements.clientRequest().type(ClientRequest).type('{enter}');
    }

    clickOnCreateJobButton()
    {
        return this.elements.jobCreateButton().contains("Create").click({force: true});
    }    

}

