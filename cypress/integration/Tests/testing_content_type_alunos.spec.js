describe('Ast_photo login test', function() {
    it('Visit Ast_photo site', function() {
        cy.visit('astphoto.docker.local')

        cy.contains('Entrar').click()
        cy.get('input[name="name"]').type('ast_dev')
        cy.get('input[name="pass"]').type('asteste21')

        cy.get('input[name="op"]').click()

        cy.contains('Adicionar conteúdo').click()
        cy.contains('Alunos').click()
        cy.get('input[name="field_name[0][value]"]').type('Juno Zireael', {force:true})
        cy.contains('Tirar foto com a Webcam')

        const galleryPath = 'images/image1.jpg';

      cy.fixture(galleryPath).then(contentGallery => {
        cy.get('[name="files[field_profile_picture_0]"]')
        .upload([
          {fileContent: contentGallery, fileName: 'image1.jpg', mimeType: 'image/JPEG' },
          ]);
      });
      cy.wait(2000)
        cy.get('input[name="field_age[0][value]"]').type('17')
        cy.get('input[name="field_address[0][value]"]').type('Rua Churchill, 48, Winston')
        cy.contains('Salvar').click()
    })
})