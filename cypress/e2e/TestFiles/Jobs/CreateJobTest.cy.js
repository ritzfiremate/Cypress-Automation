import HomePage from '../../PageObjects/HomePage';
import CreateJobPage from '../../PageObjects/CreateJobPage';
import JobDetailsPage from '../../PageObjects/JobDetailsPage';


describe('Jobs Testcases', () => {

    const HomePageObj = new HomePage();
    const CreateJobPageObj = new CreateJobPage();
    const JobDetailsPageObj = new JobDetailsPage();   

    it('Verify Create Job', () => {
        cy.login();
        HomePageObj.ClickCreateDrowndown();
        HomePageObj.ClickCreateJobs();
        CreateJobPageObj.ClickPropertyDropDown();
        CreateJobPageObj.EnterPropertyNameInFilter('brisbane city hall');
        CreateJobPageObj.EnterJobOrderReference('12345');
        CreateJobPageObj.EnterClientRequest('testing');
        CreateJobPageObj.ClickOnCreateJobButton();
        JobDetailsPageObj.GetJobTitle().should('be.visible');
        JobDetailsPageObj.GetJobTitle().should('have.text', 'Job at Brisbane City Hall')       

    })
})