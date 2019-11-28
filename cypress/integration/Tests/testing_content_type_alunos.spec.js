describe('Ast_photo login test', function() {
    it('Visit Ast_photo site', function() {
        cy.visit('astphoto.docker.local')

        cy.contains('Entrar').click()
        cy.get('input[name="name"]').type('ast_dev')
        cy.get('input[name="pass"]').type('asteste21')

        cy.get('input[name="op"]').click()

        cy.contains('Adicionar conteúdo').click()
        cy.contains('Alunos').click()
        cy.get('input[name="field_name[0][value]"]').type('Peter Junior', {force:true})
        cy.contains('Tirar foto com a Webcam')
        cy.get('input[name="field_age[0][value]"]').type('17')
        cy.get('input[name="field_address[0][value]"]').type('Rua Churchill, 48, Winston')
        cy.contains('Salvar').click()
    })
})