describe('elegir destino', () => {
  it('navegar', () => {

    cy.visit('https://www.wingo.com/')

     // Esperar a que la página cargue completamente
        cy.wait(2000) // Ajusta el tiempo de espera según sea necesario

        // Clic en el botón de búsqueda de vuelos

        //cy.get('.btn-search').scrollIntoView('.input-origen ').click()


       // Esperar a que la página de búsqueda de vuelos cargue
        cy.wait(2000) // Ajusta el tiempo de espera según sea necesario

        // Seleccionar el origen y destino de los vuelos
        cy.get('#origin').type('Bogota')
        cy.get('.ui-autocomplete-input').first().click()

   /*      cy.get('#destination').type('Cali')
        cy.get('.ui-autocomplete-input').last().click()

        // Seleccionar la fecha de ida
        cy.get('#datepicker').click()
        cy.get('.ui-datepicker-calendar tbody td:not(.ui-state-disabled)').first().click()

        // Seleccionar la fecha de regreso
        cy.get('#datepicker1').click()
        cy.get('.ui-datepicker-calendar tbody td:not(.ui-state-disabled)').last().click()

        // Seleccionar el número de pasajeros y hacer clic en buscar
        cy.get('#pax-selection').click()
        cy.get('.pax-stepper .plus').click()
        cy.get('.pax-stepper .plus').click()
        cy.get('.pax-stepper .plus').click()
        cy.get('.pax-stepper .plus').click()
        cy.get('#pax-selection-done').click()

        // Hacer clic en el botón de búsqueda
        cy.get('#search-submit').click()

        // Verificar que se haya realizado la búsqueda correctamente
        //cy.get('.search-results').should('be.visible')v
*/
  })
})