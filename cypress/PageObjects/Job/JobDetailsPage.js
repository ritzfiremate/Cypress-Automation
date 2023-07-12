export class JobDetailsPage
{
    elements = { 
        jobTitle : () => cy.get('#fm-space-title-main'),        
    }

    getJobTitle()
    {
        return this.elements.jobTitle();
    }

}

