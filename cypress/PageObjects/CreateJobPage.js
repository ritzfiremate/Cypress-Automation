class CreateJobPage{

    elements = { 
        PropertyDropDown : () => cy.get(':nth-child(1) > .form-col-4 > .e-input-group'),
        PropertyInputFilter : () => cy.get('.e-input-filter'),
        JobOrderReference : () => cy.get('#job-orderref'),
        ClientRequest : () => cy.get('.form-col-4 > .e-input-group').eq(2),
        JobCreateButton : () => cy.get('.e-control > .e-dlg-content >.dialog-with-ftr >.dialog-ftr > :nth-child(2)  > #fm-modal-complete > .e-btn-content').contains("Create"),
        
    }

    ClickPropertyDropDown()
    {
        return this.elements.PropertyDropDown().click();
    }

    EnterPropertyNameInFilter(PropertyName)
    {
        return this.elements.PropertyInputFilter().type(PropertyName).type('{enter}');
    }

    EnterJobOrderReference(JobOrderRef)
    {
        return this.elements.JobOrderReference().type(JobOrderRef);
    }

    EnterClientRequest(ClientRequest)
    {
        return this.elements.ClientRequest().type(ClientRequest).type('{enter}');
    }

    ClickOnCreateJobButton()
    {
        return this.elements.JobCreateButton().contains("Create").click({force: true});
    }    

}

export default CreateJobPage;