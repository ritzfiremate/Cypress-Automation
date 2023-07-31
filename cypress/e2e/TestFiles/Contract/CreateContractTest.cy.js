import { HomePage } from "../../../PageObjects/HomePage/HomePage";
import { CreateContract } from "../../../PageObjects/Contract/CreateContractPage";
import { contractDetails } from "../../../PageObjects/Contract/ContractDetailsPage";

const homePage =  new HomePage()
const createContract = new CreateContract();
const contDetails = new contractDetails();
let contractFields;

describe('CreateContractValidation', () => 
{
    before(function()
    {
        cy.fixture('ContractTestData.json').then((data) =>
        {
            contractFields = data;
        })
    })
    it('CreateContract', () =>
    {
        cy.login()
        homePage.clickCreateDropdown();
        homePage.clickCreateContract();
        createContract.selectContractFromDropdown();
        createContract.enterCustomerName(contractFields.customerName);
        createContract.enterContractName(contractFields.contractName);
        createContract.enterContractType(contractFields.contractType);
        createContract.enterPackage(contractFields.package);
        createContract.enterDuration(contractFields.duration);
        createContract.enterContractRenewalType(contractFields.contractRenewalType);
        createContract.CreateContractButton();
        contDetails.getContractNameOnTopLeft().should('have.text', contractFields.contractName);
        contDetails.getContractName().should('have.value', contractFields.contractName);
        //cy.get('#fm-space-title-main').should('have.text', contractFields.contractName);
        //cy.get(':nth-child(3) > :nth-child(3) > :nth-child(1) > .e-input-group').should('have.text', contractFields.contractType);
    })
    
    it('ValidateMandatoryCustomer&ContractFields', () =>
    {
        cy.login()
        homePage.clickCreateDropdown();
        homePage.clickCreateContract();
        createContract.CreateContractButton();
        cy.get('#CustomerID-info').should('be.visible');
        cy.get('#Name-info').should('be.visible');

    })

    it('ClickCancel', () =>
    {
        cy.login()
        homePage.clickCreateDropdown();
        homePage.clickCreateContract();
        createContract.enterCustomerName(contractFields.customerName);
        createContract.enterContractName(contractFields.contractName);
        createContract.enterContractType(contractFields.contractType);
        createContract.enterPackage(contractFields.package);
        createContract.enterDuration(contractFields.duration);
        createContract.enterContractRenewalType(contractFields.contractRenewalType);
        createContract.CancelButton();
        cy.get('#fm-dlg-create').should('not.be.visible');
    })

    it('ValidateContractType', () => 
    {
        cy.login()
        homePage.clickCreateDropdown();
        homePage.clickCreateContract();
        createContract.enterCustomerName(contractFields.customerName);
        createContract.enterContractName(contractFields.contractName);
        createContract.enterContractType(contractFields.contractType);
        createContract.CreateContractButton();
        contDetails.getContractType().should('have.text', contractFields.contractType);
    })
    
    it('ValidateContractRenewalType', () => 
    {
        cy.login()
        homePage.clickCreateDropdown();
        homePage.clickCreateContract();
        createContract.enterCustomerName(contractFields.customerName);
        createContract.enterContractName(contractFields.contractName);
        createContract.enterContractType(contractFields.contractType);
        createContract.enterPackage(contractFields.package);
        createContract.enterContractRenewalType(contractFields.contractRenewalType); 
        createContract.CreateContractButton();
        contDetails.getContractRenewalType().should('have.text', contractFields.contractRenewalType);
    })

    it('ValidatePackage', () =>
    {
        cy.login();
        homePage.clickCreateDropdown();
        homePage.clickCreateContract();
        createContract.enterCustomerName(contractFields.customerName);
        createContract.enterContractName(contractFields.contractName);
        createContract.enterContractType(contractFields.contractType);
        createContract.enterPackage(contractFields.package);
        createContract.enterContractRenewalType(contractFields.contractRenewalType); 
        createContract.CreateContractButton();
        contDetails.getPackageName().should('have.text', contractFields.package);
    })

    it.only('ValidateDuration', () =>
    {
        cy.login();
        homePage.clickCreateDropdown();
        homePage.clickCreateContract();
        createContract.enterCustomerName(contractFields.customerName);
        createContract.enterContractName(contractFields.contractName);
        createContract.enterContractType(contractFields.contractType);
        createContract.enterPackage(contractFields.package);
        createContract.enterDuration(contractFields.duration);
        createContract.enterContractRenewalType(contractFields.contractRenewalType); 
        createContract.CreateContractButton();
        contDetails.getDuration().should('have.value', contractFields.duration)
    })
})