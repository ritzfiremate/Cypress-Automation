/// <reference types="cypress"/>
import { HomePage } from "../../../PageObjects/HomePage/HomePage";
import { CreateProperty } from "../../../PageObjects/Property/CreatePropertyPage";
import { propertyDetails } from "../../../PageObjects/Property/PropertyDetailsPage";

const createProperty = new CreateProperty();
const propDetails = new propertyDetails();
const homePage =  new HomePage()


let propertyFields;
let SEType;
let productType;

describe('PropertyCreateModalTestSuite', () => 
{
    before(function() 
    {
        cy.fixture('PropertyTestData.json').then((data) => 
        {
            propertyFields = data;
        })

        cy.fixture('SEType.json').then((data) => 
        {
            SEType = data.SEType2;
        })

        cy.fixture('ProductType.json').then((data) => 
        {
            productType = data.ProductType5;
        })
    })
    
    it.only('ValidateCreateProperty', () => 
    {
        cy.login()
        //create property
        homePage.clickCreateDropdown();
        homePage.clickCreateProperty();
        createProperty.enterContractName(propertyFields.contractName);
        createProperty.enterPropertyName(propertyFields.propertyName);
        createProperty.enterRegion(propertyFields.region);
        createProperty.enterAddress(propertyFields.address1);
        createProperty.enterCity(propertyFields.city);
        createProperty.enterState(propertyFields.state);
        createProperty.enterPostCode(propertyFields.postCode);
        createProperty.clickCreateButton();
        //validate all field values
        cy.wait(1000)
        propDetails.getPropertyNameOnTopLeft().should('have.text', propertyFields.propertyName)
        propDetails.getContractName().should('have.text', propertyFields.contractName)
        propDetails.getPropertyName().should('have.value', propertyFields.propertyName)
        propDetails.getRegion().should('have.text', propertyFields.region)
        propDetails.getAddress().should('have.value', propertyFields.address1)
        propDetails.getCity().should('have.value', propertyFields.city)
        propDetails.getState().should('have.text', propertyFields.state)
        propDetails.getPostCode().should('have.value', propertyFields.postCode)
    })

    it('ValidateMandatoryFields', () =>
    {
        cy.login()
        homePage.clickCreateDropdown();
        homePage.clickCreateProperty();
        createProperty.clickCreateButton()
        cy.get('#ContractID-info').should('be.visible')
        cy.get('#Name-info').should('be.visible')
        cy.get('#PropertyZoneID-info').should('be.visible')
        cy.get('#Address1-info').should('be.visible')
        cy.get('#City-info').should('be.visible')
        cy.get('#Postcode-info').should('have.text', ' Postcode is required.')
    })

    it.only('ValidateCancelButton', () => 
    {
        cy.login()
        homePage.clickCreateDropdown();
        homePage.clickCreateProperty();
        createProperty.enterContractName(propertyFields.contractName)
        createProperty.enterPropertyName(propertyFields.propertyName)
        createProperty.enterRegion(propertyFields.region)
        createProperty.enterAddress(propertyFields.address1)
        createProperty.enterCity(propertyFields.city)
        createProperty.enterState(propertyFields.state)
        createProperty.enterPostCode(propertyFields.postCode)
        createProperty.clickCancelButton()
        cy.get('#fm-dlg-create').should('not.be.visible')
    })

})