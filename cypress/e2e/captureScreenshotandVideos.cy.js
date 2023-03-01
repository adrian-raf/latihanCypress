describe('My Suite', () => {
  it('Capture Screenshots & Videos', () => {
    cy.visit('https://demo.opencart.com/');
    cy.screenshot('Homepage');

    cy.get("img[title='Your Store']").screenshot('logo');

    // Automatically capture screenshot & video on failure - Only when use CLI
    cy.get('li:nth-child(7) a:nth-child(1)').click();
    cy.get("div[id='content'] h2").should('have.text', 'Tablets'); //negative test
  });
});

// HANYA TEST YG FAIL YG AKAN DI SCREENSHOT
// LALU EKSEKUSI KODE INI PADA TERMINAL
// npx cypress run --spec E:\latihanCypress\cypress\e2e\captureScreenshotandVideos.cy.js
