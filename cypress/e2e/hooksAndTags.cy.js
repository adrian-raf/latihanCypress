// Hook
/**Before
 * BeforeEach
 * After
 * AfterEach
 */

// Tag

/**
 * it.skip
 * it.only
 */

describe('MyTestSuite', () => {
  before(() => {
    cy.log('***** Launch App *****');
  });
  after(() => {
    cy.log('***** Close App *****');
  });

  beforeEach(() => {
    cy.log('***** Login *****');
  });

  afterEach(() => {
    cy.log('***** Logout *****');
  });

  it('Search', () => {
    cy.log('***** Searching *****');
  });

  it('Advanced Search', () => {
    cy.log('***** Advanced Search *****');
  });

  it('Listing Products', () => {
    cy.log('***** Listing Products *****');
  });
});
