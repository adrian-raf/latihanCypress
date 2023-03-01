describe('Handle Tables', () => {
  beforeEach('Login', () => {
    cy.visit('https://demo.opencart.com/admin/index.php');
    cy.get("[name='username']").type('demo');
    cy.get("[name='password']").type('demo');
    cy.get("button[type='submit']").click();
    cy.get('.btn-close').click();
    // Customers --> customers
    cy.get('#menu-customer>a').click(); //customers main menu
    cy.get('#menu-customer>ul>li:first-child').click(); //customers sub/child item
  });
  it('Check Number Rows & Columns', () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").should(
      'have.length',
      '10'
    );
    cy.get(
      "table[class='table table-bordered table-hover']>thead>tr>td"
    ).should('have.length', '7');
  });
  it('Check cell data from specific row & column', () => {
    cy.get(
      "table[class='table table-bordered table-hover']>tbody>tr:nth-child(3)>td:nth-child(3)"
    ).contains('gorankreziccc90@gmail.com');
  });
  it('Read all the rows & columns data in the first pages', () => {
    /**
     * $row = particular row
     * index = index every row
     * $rows = variable contains all rows
     */
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
      ($row, index, $rows) => {
        cy.wrap($row).within(() => {
          cy.get('td').each(($col, index, $cols) => {
            cy.log($col.text());
          });
        });
      }
    );
  });
  it.only('Pagination', () => {
    // Find total number of pages
    // let totalPages;
    // cy.get('.col-sm-6 text-end').then((e) => {
    //   let myText = e.text(); //Showing 1 to 10 of 10063 (1007 Pages)
    //   // substring(indexStart, indexEnd)
    //   totalPages = myText.substring(
    //     myText.indexOf('(') + 1,
    //     myText.indexOf('Pages') - 1
    //   );
    //   cy.log('Total number of pages in a table is :' + totalPages);
    // });

    // finding just some number of pages (not all)
    // p is representing pagination number
    let totalPages = 3;
    for (let p = 1; p <= totalPages; p++) {
      if (totalPages > 1) {
        cy.log('Active page is =' + p);
        cy.get("ul[class='pagination']>li:nth-child(" + p + ')').click();
        cy.wait(2000);

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
          ($row, index, $rows) => {
            cy.wrap($row).within(() => {
              // atau bisa jg menggunakan ini "table[class='table table-bordered table-hover']>thead>tr>td:nth-child(3)"
              cy.get('td:nth-child(3)').then((e) => {
                cy.log(e.text());
              });
            });
          }
        );
      }
    }
  });
});
