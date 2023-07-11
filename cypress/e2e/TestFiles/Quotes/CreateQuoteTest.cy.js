import HomePage from "../../PageObjects/HomePage";
import CreateQuotePage from "../../PageObjects/CreateQuotePage";
import QuoteDetailsPage from "../../PageObjects/QuoteDetailsPage";

describe('Quotes Testcases', () => {

    const HomePageObj = new HomePage();
    const CreateQuoteObj = new CreateQuotePage();
    const QuoteDetailsPageObj =  new QuoteDetailsPage();

    it('Verify Create New Quote', () => {
        
        cy.login();
        HomePageObj.ClickCreateDrowndown();
        HomePageObj.ClickCreateQuote();
        CreateQuoteObj.ClickBEDropDown();
        CreateQuoteObj.SelectBEFromList('FireMe');
        CreateQuoteObj.ClickCustomerDropDown();
        CreateQuoteObj.EnterCustomerNameInFilter('Brisbane city hall');
        CreateQuoteObj.ClickPropertyDropDown();
        CreateQuoteObj.EnterPropertyNameInFilter('Brisbane city hall');
        CreateQuoteObj.ClickOnCreateQuoteButton();
        QuoteDetailsPageObj.GetPropertyName().should('be.visible');
        QuoteDetailsPageObj.GetPropertyName().should('have.text', 'Brisbane City Hall'); 
        cy.logout();       
                 
    })
   
    
})