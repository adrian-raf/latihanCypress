import 'cypress-file-upload';

describe('File Uploads', () => {
  it('Single file upload', () => {
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').attachFile('test1.pdf');
    // Jika ingin menggunakan attachFile, maka file yg ingin diupload harus diletakan didalam fixtures
    cy.get('#file-submit').click();
    cy.wait(3000);
    cy.get('.example>h3').contains('File Uploaded!');
  });

  it('File Upload - Rename', () => {
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#file-upload').attachFile({
      filePath: 'test1.pdf', //actual name file
      fileName: 'HasilRenameFile', //file with name as we want (rename)
    });

    cy.get('#file-submit').click();
    cy.wait(3000);
    cy.get('.example>h3').contains('File Uploaded!');
  });

  it('File Upload - Drag and drop', () => {
    cy.visit('https://the-internet.herokuapp.com/upload');
    cy.get('#drag-drop-upload').attachFile('test1.pdf', {
      subjectType: 'drag-n-drop',
    });
    cy.get(
      '#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span'
    ).contains('test1.pdf');
    // cy.get('#file-submit').click();
    // cy.wait(3000);
    // cy.get('.example>h3').contains('File Uploaded!');
  });

  it('Multiple files Upload', () => {
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
    cy.get('#filesToUpload').attachFile(['test1.pdf', 'test2.pdf']);
    cy.get('#fileList > :nth-child(1)').contains('test1.pdf');
    cy.get('#fileList > :nth-child(2)').contains('test2.pdf');
  });

  it.only('File Upload - Shadow Dom', () => {
    cy.visit(
      'https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm'
    );
    cy.get('.smart-browse-input', { includeShadowDom: true }).attachFile(
      'test1.pdf'
    ); // this class is in the shadow dom
    /**
     * {includeShadowDom:true} this particular parameter will automatically
     * find this element inside the shadow dom
     */
    cy.wait(2000);

    cy.get('.smart-item-name', { includeShadowDom: true }).contains(
      'test1.pdf'
    );
    cy.get('.smart-file-upload-footer', { includeShadowDom: true }).should(
      'be.visible'
    );
  });
});
