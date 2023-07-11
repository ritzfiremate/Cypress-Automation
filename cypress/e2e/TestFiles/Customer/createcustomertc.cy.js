import { CreateCustomer } from "../../../PageObjects/Customer/createcustomer" 
import HomePage from "../../../PageObjects/HomePage"

const createCustomer = new CreateCustomer()
const homePage =  new HomePage()

describe('CreateCustomerValidation', () =>
{
    it ('Create Customer', () =>
     {
        cy.login('firemate', 'firemaIwasonly19')
        homePage.ClickCreateDrowndown()
        homePage.clickCreateCustomer()
        //createCustomer.selectCustomerFromDropdown()
        createCustomer.enterCustomerDetails('FireMe', 'Pokemon1', 'PM-6678', 7886, 'abs@poke.com')
        createCustomer.createCustomerButton()
        cy.get('#fm-space-title-main').contains('Pokemon1')
    })

    it('MandatoryCustomerName', () => 
    {
        cy.login('firemate', 'firemaIwasonly19')
        homePage.ClickCreateDrowndown()
        homePage.clickCreateCustomer()
        //createCustomer.selectCustomerFromDropdown()
        createCustomer.enterCustomerDetails('FireMe', ' ', 'PM-6678', 7886, 'abs@poke.com')
        createCustomer.createCustomerButton()
        cy.get('#Name-info').should('be.visible')
    })

    it('MandatoryBEChargingEntity', () => 
    {
        cy.login('firemate', 'firemaIwasonly19')
        homePage.ClickCreateDrowndown()
        homePage.clickCreateCustomer()
        //createCustomer.selectCustomerFromDropdown()
        cy.get(':nth-child(1) > .form-col-4 > .e-input-group').click()
        cy.get(':nth-child(1) > .form-col-4 > .e-input-group').click()
        cy.get('.fm-modal-stages > :nth-child(1) > .mb-3').click()
        cy.get('#ChargingBusEntID-info').should('be.visible')
    })

    it('ClickCancel', () =>
    {
        cy.login('firemate', 'firemaIwasonly19')
        homePage.ClickCreateDrowndown()
        homePage.clickCreateCustomer()
        //createCustomer.selectCustomerFromDropdown()
        createCustomer.enterCustomerDetails('FireMe', 'abc', 'PM-6678', 7886, 'abs@poke.com')
        createCustomer.cancelButton()
        cy.get('#fm-dlg-create').should('not.be.visible')
    })
})
