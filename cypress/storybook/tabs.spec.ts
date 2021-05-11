describe('Tabs Spec', () => {
  const getIframeDocument = () =>
    cy.get('#storybook-preview-iframe').its('0.contentDocument').should('exist');

  const getIframeBody = () =>
    getIframeDocument().its('body').should('not.be.undefined').then(cy.wrap);

  beforeEach(() => {
    cy.visit('/');
    cy.get('#ui-tabs').click();
  });

  it('should render tabIndex 0 when navIndex 0 is clicked', () => {
    getIframeBody().find('.nav-index-0').click();
    getIframeBody().find('.tab-index-0').should('exist');
    getIframeBody().find('.tab-index-1').should('not.exist');
    getIframeBody().find('.tab-index-2').should('not.exist');
  });

  it('should render tabIndex 1 when navIndex 1 is clicked', () => {
    getIframeBody().find('.nav-index-1').click();
    getIframeBody().find('.tab-index-1').should('exist');
    getIframeBody().find('.tab-index-0').should('not.exist');
    getIframeBody().find('.tab-index-2').should('not.exist');
  });

  it('should render tabIndex 2 when navIndex 2 is clicked', () => {
    getIframeBody().find('.nav-index-2').click();
    getIframeBody().find('.tab-index-2').should('exist');
    getIframeBody().find('.tab-index-0').should('not.exist');
    getIframeBody().find('.tab-index-1').should('not.exist');
  });
});
