// cypress/storybook/modal.spec.ts

describe('Modal Spec', () => {
  const getIframeDocument = () =>
    cy.get('#storybook-preview-iframe').its('0.contentDocument').should('exist');

  const getIframeBody = () =>
    getIframeDocument().its('body').should('not.be.undefined').then(cy.wrap);

  beforeEach(() => {
    cy.visit('/');
    cy.get('#ui-modal').click();
  });

  it('should not render modal when button is not clicked', () => {
    getIframeBody().find('.modal').should('not.exist');
  });

  it('should close modal when background of modal is clicked', () => {
    getIframeBody().find('button').click();
    getIframeBody().find('.modal').click('topLeft');
    getIframeBody().find('.modal').should('not.exist');
  });

  it('should render modal when button clicked', () => {
    getIframeBody().find('button').click();
    getIframeBody().find('.modal').should('exist');
  });

  it('should not close modal when modal content is clicked', () => {
    getIframeBody().find('button').click();
    getIframeBody().find('.modal-content').click();
    getIframeBody().find('.modal').should('exist');
  });
});
