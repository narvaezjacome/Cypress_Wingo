describe('elegir destino', () => {
  it('navegar', () => {

    cy.visit('https://www.wingo.com/')

     // Esperar a que la página cargue completamente
        cy.wait(2000) // Ajusta el tiempo de espera según sea necesario

        // Clic en el botón de búsqueda de vuelos

        cy.get('.btn-search').click({force: true})


       // Esperar a que la página de búsqueda de vuelos cargue
        cy.wait(2000) // Ajusta el tiempo de espera según sea necesario

        // Seleccionar el origen y destino de los vuelos
        cy.get('#inputOrigen').type('Bogot')
        cy.get('#comboOrigen').click()


        cy.get('#inputDestino').type('Cali')
        cy.get('#comboDestino').click()
        cy.wait(2000)


        cy.get('#inputOutboundDate').find('.valid').eq(0).click({force: true})
        cy.wait(2000)
        cy.get('.return-selected').find('.month-wrapper').find('.valid').eq(30).click({force: true})

        cy.get('#selectPasj').click()
        cy.get('#passenger').find('.bts-add').find('.plus').click()
        cy.wait(2000)


  })
})