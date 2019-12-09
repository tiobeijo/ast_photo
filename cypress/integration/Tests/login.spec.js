describe('Ast_photo login test', function() {
    it('Visit Ast_photo site', function() {
        cy.visit('astphoto.docker.local')

        cy.contains('Entrar').click()
        cy.get('input[name="name"]').type('ast_dev')
        cy.get('input[name="pass"]').type('asteste21')

        cy.get('input[name="op"]').click()
    })
})