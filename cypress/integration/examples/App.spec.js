describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('check button sign in is visible', () => {
    cy.visit ('/');
    cy.get('[data-cy=user]').should('contain', 'Sign');
  });

  it('get user role when sign in', () => {
    cy.visit ('/');
    cy.get('[data-cy=user]').click();
    cy.get('[data-cy=header]').should('contain' ,"seller");
  });
});