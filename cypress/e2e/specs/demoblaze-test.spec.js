describe('Test Demoblaze', () => {

    beforeEach('Ingresar a la página web', () => {
        cy.clearAllCookies()
        cy.goToDemoblazePage()
    })

    it('Hacer Login, comprar un artículo y desloguearse con commands', () => {
        cy.loginDemoblazePage('ArgenisPintoTester','abcdef')
        cy.comprarArticulo('Phones','Iphone 6 32gb')
        cy.realizarCompra('Argenis Pinto', 'Argentina', 'Cordoba', 123456789, 'Marzo', 2026)
        cy.logoutDemoblaze()
    })

})