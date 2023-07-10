/* ==== Test Created with Cypress Studio ==== */
it('Login', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('test.beta.firemate.dev');
  cy.get('#username').clear('f');
  cy.get('#username').type('firemate');
  cy.get('#password').click();
  cy.get('#password').clear('firemaIwasonly19');
  cy.get('#password').type('firemaIwasonly19');
  cy.get('#login').click();
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('.px-4 > .ml-2 > svg').click();
  cy.get(':nth-child(1) > :nth-child(2) > .fm-list-item').click();
  cy.get(':nth-child(1) > .form-col-4 > .e-input-group').click();
  cy.get('.e-input-filter').clear();
  cy.get('.e-input-filter').type('hog');
  cy.get('#f9c8-0').click();
  cy.get('#job-orderref').clear('1');
  cy.get('#job-orderref').type('100');
  cy.get('#textarea_82').click();
  cy.get('.e-btn-content').click();
  /* ==== End Cypress Studio ==== */
  /* ==== Generated with Cypress Studio ==== */
  cy.get('.px-4 > .ml-2 > svg').click();
  cy.get(':nth-child(1) > :nth-child(2) > .fm-list-item').click();
  cy.get(':nth-child(1) > .form-col-4 > .e-input-group').click();
  cy.get('.e-input-filter').clear();
  cy.get('.e-input-filter').type('hog');
  cy.get('#f9c8-0').click();
  cy.get('#job-orderref').clear('1');
  cy.get('#job-orderref').type('100');
  cy.get('#textarea_82').click();
  cy.get('.e-btn-content').click();
  /* ==== End Cypress Studio ==== */
});