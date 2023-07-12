import { HomePage } from "../../../PageObjects/HomePage/HomePage"
import { CreateJobPage } from "../../../PageObjects/Job/CreateJobPage" 
import { JobDetailsPage } from "../../../PageObjects/Job/JobDetailsPage" 


describe('Jobs Testcases', () => {

    const HomePageObj = new HomePage();
    const CreateJobPageObj = new CreateJobPage();
    const JobDetailsPageObj = new JobDetailsPage();   

    it('Verify Create Job', () => {
        cy.login();
        HomePageObj.clickCreateDrowndown();
        HomePageObj.clickCreateJobs();
        CreateJobPageObj.clickPropertyDropDown();
        CreateJobPageObj.enterPropertyNameInFilter('brisbane city hall');
        CreateJobPageObj.enterJobOrderReference('12345');
        CreateJobPageObj.enterClientRequest('testing');
        CreateJobPageObj.clickOnCreateJobButton();
        JobDetailsPageObj.getJobTitle().should('be.visible');
        JobDetailsPageObj.getJobTitle().should('have.text', 'Job at Brisbane City Hall')       

    })
})