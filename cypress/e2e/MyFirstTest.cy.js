describe('My First Test', function()

{
  it('Verify Title of Page', function()
  {
    cy.visit('test.beta.firemate.dev')
    cy.title().should('eq', 'FireMate')
  }
   
  )
})
