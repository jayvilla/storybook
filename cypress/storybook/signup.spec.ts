// cypress/storybook/signup.spec.ts
import { errorMessages } from '../../src/components/signup/constants';

describe('Signup Spec', () => {
  const getIframeDocument = () =>
    cy.get('#storybook-preview-iframe').its('0.contentDocument').should('exist');

  const getIframeBody = () =>
    getIframeDocument().its('body').should('not.be.undefined').then(cy.wrap);

  beforeEach(() => {
    cy.visit('/');
    cy.get('#form-signup').click();
  });

  it('should render error with invalid first name field', () => {
    getIframeBody().find('[data-cy="signup-firstName"]').type('   ');
    getIframeBody().find('[data-cy="signup-lastName"]').type('user1234');
    getIframeBody().find('[data-cy="signup-email"]').type('tester1234@user1234.com');
    getIframeBody().find('[data-cy="signup-password"]').type('!Test1234');
    getIframeBody().find('[data-cy="signup-confirmPassword"]').type('!Test1234');
    getIframeBody().find('[data-cy="signup-phoneNumber"]').type('+15106721234');
    getIframeBody().find('form').submit();
    getIframeBody()
      .find('[data-cy="signup-error"]')
      .should('contain.html', errorMessages.firstName);
  });

  it('should render error with invalid last name field', () => {
    getIframeBody().find('[data-cy="signup-firstName"]').type('tester1234');
    getIframeBody().find('[data-cy="signup-lastName"]').type('   ');
    getIframeBody().find('[data-cy="signup-email"]').type('tester1234@user1234.com');
    getIframeBody().find('[data-cy="signup-password"]').type('!Test1234');
    getIframeBody().find('[data-cy="signup-confirmPassword"]').type('!Test1234');
    getIframeBody().find('[data-cy="signup-phoneNumber"]').type('+15106721234');
    getIframeBody().find('form').submit();
    getIframeBody()
      .find('[data-cy="signup-error"]')
      .should('contain.html', errorMessages.lastName);
  });

  it('should render error with invalid email field', () => {
    getIframeBody().find('[data-cy="signup-firstName"]').type('tester1234');
    getIframeBody().find('[data-cy="signup-lastName"]').type('user1234');
    getIframeBody().find('[data-cy="signup-email"]').type('tester1234');
    getIframeBody().find('[data-cy="signup-password"]').type('!Test1234');
    getIframeBody().find('[data-cy="signup-confirmPassword"]').type('!Test1234');
    getIframeBody().find('[data-cy="signup-phoneNumber"]').type('+15106721234');
    getIframeBody().find('form').submit();
    getIframeBody()
      .find('[data-cy="signup-error"]')
      .should('contain.html', errorMessages.email);
  });

  it('should render error with invalid password field', () => {
    getIframeBody().find('[data-cy="signup-firstName"]').type('tester1234');
    getIframeBody().find('[data-cy="signup-lastName"]').type('user1234');
    getIframeBody().find('[data-cy="signup-email"]').type('tester1234@user1234.com');
    getIframeBody().find('[data-cy="signup-password"]').type('     ');
    getIframeBody().find('[data-cy="signup-confirmPassword"]').type('     ');
    getIframeBody().find('[data-cy="signup-phoneNumber"]').type('+15106721234');
    getIframeBody().find('form').submit();
    getIframeBody()
      .find('[data-cy="signup-error"]')
      .should('contain.html', errorMessages.password);
  });

  it('should render error when passwords do not match', () => {
    getIframeBody().find('[data-cy="signup-firstName"]').type('tester1234');
    getIframeBody().find('[data-cy="signup-lastName"]').type('user1234');
    getIframeBody().find('[data-cy="signup-email"]').type('tester1234@user1234.com');
    getIframeBody().find('[data-cy="signup-password"]').type('!Test1234');
    getIframeBody().find('[data-cy="signup-confirmPassword"]').type('!Test4321');
    getIframeBody().find('[data-cy="signup-phoneNumber"]').type('+15106721234');
    getIframeBody().find('form').submit();
    getIframeBody()
      .find('[data-cy="signup-error"]')
      .should('contain.html', errorMessages.confirmPassword);
  });

  it('should render error when passwords do not match', () => {
    getIframeBody().find('[data-cy="signup-firstName"]').type('tester1234');
    getIframeBody().find('[data-cy="signup-lastName"]').type('user1234');
    getIframeBody().find('[data-cy="signup-email"]').type('tester1234@user1234.com');
    getIframeBody().find('[data-cy="signup-password"]').type('!Test1234');
    getIframeBody().find('[data-cy="signup-confirmPassword"]').type('!Test1234');
    getIframeBody().find('[data-cy="signup-phoneNumber"]').type('6721234');
    getIframeBody().find('form').submit();
    getIframeBody()
      .find('[data-cy="signup-error"]')
      .should('contain.html', errorMessages.phoneNumber);
  });

  it('should render error when form submission has error', () => {
    getIframeBody().find('[data-cy="signup-firstName"]').type('tester1234');
    getIframeBody().find('[data-cy="signup-lastName"]').type('user1234');
    getIframeBody().find('[data-cy="signup-email"]').type('tester1234@user1234.com');
    getIframeBody().find('[data-cy="signup-password"]').type('!Test1234');
    getIframeBody().find('[data-cy="signup-confirmPassword"]').type('!Test1234');
    getIframeBody().find('[data-cy="signup-phoneNumber"]').type('+15106721234');
    getIframeBody().find('form').submit();
    getIframeBody().find('[data-cy="signup-message"]').should('exist');
  });
});
