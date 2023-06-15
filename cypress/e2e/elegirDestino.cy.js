import dayjs from 'dayjs';

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

        cy.get('.input-origen').type('Bogot')
        cy.get('#comboOrigen').click()


        cy.get('#inputDestino').type('Cali')
        cy.get('#comboDestino').click()
        cy.wait(2000)



        // Seleccionar el numero de pasajeros adultos

        cy.get('#selectPasj').click()
        cy.get('.bts-add').eq(0).find('.plus').click({force: true})
        cy.wait(2000)



        // Seleccionar fecha valida de ida

        cy.get('#inputOutboundDate').find('.valid').eq(0).click({force: true})
        cy.wait(2000)


        // Seleccionar fecha valida de regreso
        cy.get('.return-selected').find('.month-wrapper').find('.valid').eq(30).click({force: true})
        cy.wait(2000)


        // VALIDACION CAMPOS


        //Valida campo de origen
        cy.get('.styledSelectOrigen').should('have.text','Bogotá (BOG) El Dorado')

        //Valida campos de destino
        cy.get('.styledSelectDestino').should('have.text','Cali (CLO) Alfonso Bonilla Aragón')

        //Valida la cantidad de pasajeros
        cy.get('#tPasajeros').should('have.text','2 Pasajeros')



        //Valida fecha de ida y regreso

        cy.get('.info-select-start').as('fechaIda')
        //cy.get('@fechaIda').invoke('text').then((fechaIda)

        cy.get('.info-select-end').as('fechaRegreso')
        //cy.get('@fechaRegreso').invoke('text').then((fechaRegreso)

       cy.get('@fechaIda').invoke('val').then((fechaIda) => {
          cy.get('@fechaRegreso').invoke('val').then((fechaRegreso) => {

            const fechaIdaObj = dayjs(fechaIda);
            const fechaRegresoObj = dayjs(fechaRegreso);

            const diferenciaMes = fechaRegresoObj.diff(fechaIdaObj, 'months');
            const esValido = diferenciaMes >= 1;

            expect(esValido).to.be.false;
          });
        });



  })
})