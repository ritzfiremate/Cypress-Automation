//import { LoginPage } from "./loginpage";
import { CreateCustomer } from "../ClassFiles/createcustomer"
import { CreateContract } from "../ClassFiles/Contract/CreateContractPage"
import { CreateProperty } from "../ClassFiles/CreatePropertyPage"
import { propertyDetails } from "../ClassFiles/Property/PropertyDetailsPage"
import { AddProductInspection } from "../ClassFiles/Property/ProdInspectionPage"

//var loginPage = new LoginPage()
const createCust = new CreateCustomer()
const createContr = new CreateContract()
const createProperty = new CreateProperty()
const propDetails = new propertyDetails()
const addProductObject =  new AddProductInspection()

let propertyFields = {
    contractName : 'Jets35Contracts',
    propertyName : 'Jets36Property',
    region : 'CBD',
    address1 : 'Test Street',
    city : 'Brisbane',
    state : 'QLD',
    postCode : 4001
}
let SETypeData;

describe('createcontractfromcustomer', () => 
{
    it('createcontractfromcustomer', () => 
    {
        cy.fixture('SEType.json').then((data) =>
        {
            SETypeData = data.SEType1;
        })
        cy.login()
        createCust.selectCustomerFromDropdown()
        createCust.enterCustomerDetails('FireMe', 'Jets35Cust', 'AS-123', 123, 'jet@ex.com')
        createCust.createCustomerButton()
        cy.get('#fm-space-title-main').contains('Jets35Cust')
        cy.get('[data-uid="contracts"] > .e-text-content > .e-list-text > .flexbox > div').click()
        cy.get('#contractstab > .fm-content-header > h3').should('be.visible')
        cy.get('#fm-add-contract-btn').click()
        cy.get('#input-name').type('Jets35Contracts')
        createContr.CreateContractButton()
        cy.get('[data-uid="properties"] > .e-text-content > .e-list-text > .flexbox > div').click()
        cy.get('#fm-add-property-btn').click()
        createProperty.enterContractName(propertyFields.contractName)
        createProperty.enterPropertyName(propertyFields.propertyName)
        createProperty.enterRegion(propertyFields.region)
        createProperty.enterAddress(propertyFields.address1)
        createProperty.enterCity(propertyFields.city)
        createProperty.enterState(propertyFields.state)
        createProperty.enterPostCode(propertyFields.postCode)
        createProperty.clickCreateButton()
        propDetails.getPropertyNameOnTopLeft().should('have.text', propertyFields.propertyName)
        addProductObject.selectInspectionsTab()
        addProductObject.clickAddInspectionButton()
        addProductObject.selectSEType(SETypeData)
        addProductObject.selectProductType('Fire Detection Systems')
        addProductObject.selectSavebutton()
        //cy.get('#fm-space-title-main').should('have.text', 'Jet23Prop')
        /*cy.get('[data-uid="inspections"] > .e-text-content > .e-list-text > .flexbox > div').click()
        cy.get(':nth-child(1) > .fm-content-header > .flex-space-end > .ml-2').click()
        cy.get('.e-dropdownbase > .e-ul > .e-list-item').contains('Automatic Fire Sprinkler Systems')*/
    })
}) 