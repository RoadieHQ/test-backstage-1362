describe('The website', () => {
  it('is accessible', () => {
    cy.visit('');
    cy.contains('Welcome to test-backstage-1362').click();
  })
})
