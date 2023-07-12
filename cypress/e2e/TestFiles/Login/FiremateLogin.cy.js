describe('template spec', () => {
    it('LoginPass', () => {
      cy.visit('https://test.beta.firemate.dev/Auth/Login?ReturnUrl=%2F')
      cy.get('#username').clear();
      cy.get('#username').type('Firemate');
      cy.get('#password').clear();
      cy.get('#password').type('firemaIwasonly19');
      cy.get('#login').click();
      cy.get('#mainPage > :nth-child(2)').should('have.text','Welcome to FireMate')
    })
    it('LoginFail',()=>{
      cy.visit('https://test.beta.firemate.dev/Auth/Login?ReturnUrl=%2F')
      cy.get('#username').clear();
      cy.get('#username').type('Firemate');
      cy.get('#password').clear();
      cy.get('#password').type('firemaIwasonly20');
      cy.get('#login').click();
      cy.get('.e-toast-content').should('have.text','The Username or Password you have entered is Incorrect')
    })
  })