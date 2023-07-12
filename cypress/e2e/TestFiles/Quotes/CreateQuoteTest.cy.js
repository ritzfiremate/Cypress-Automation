import { HomePage } from "../../../PageObjects/HomePage/HomePage"
import { CreateQuotePage } from "../../../PageObjects/Quote/CreateQuotePage" 
import { QuoteDetailsPage } from "../../../PageObjects/Quote/QuoteDetailsPage" 

describe('Quotes Testcases', () => {

    const HomePageObj = new HomePage();
    const CreateQuoteObj = new CreateQuotePage();
    const QuoteDetailsPageObj =  new QuoteDetailsPage();

    it('Verify Create New Quote', () => {
        
        cy.login();
        HomePageObj.clickCreateDrowndown();
        HomePageObj.clickCreateQuote();
        CreateQuoteObj.clickBEDropDown();
        CreateQuoteObj.selectBEFromList('FireMe');
        CreateQuoteObj.clickCustomerDropDown();
        CreateQuoteObj.enterCustomerNameInFilter('Brisbane city hall');
        CreateQuoteObj.clickPropertyDropDown();
        CreateQuoteObj.enterPropertyNameInFilter('Brisbane city hall');
        CreateQuoteObj.clickOnCreateQuoteButton();
        QuoteDetailsPageObj.getPropertyName().should('be.visible');
        QuoteDetailsPageObj.getPropertyName().should('have.text', 'Brisbane City Hall'); 
        cy.logout();       
                 
    })   
    
})