class JobDetailsPage
{
    elements = { 
        JobTitle : () => cy.get('#fm-space-title-main'),        
    }

    GetJobTitle()
    {
        return this.elements.JobTitle();
    }

}

export default JobDetailsPage;