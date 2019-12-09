describe('Ast_photo login test', function() {
    it('Visit Ast_photo site', function() {
        cy.visit('astphoto.docker.local')

        cy.contains('Entrar').click()
        cy.get('input[name="name"]').type('ast_dev')
        cy.get('input[name="pass"]').type('asteste21')

        cy.get('input[name="op"]').click()

        cy.contains('Adicionar conteúdo').click()
        cy.contains('Alunos').click()
        cy.get('input[name="title[0][value]"]').type('Juno Zireael', {force:true})
        cy.get('input[name="field_name[0][value]"]').type('Juno Zireael da Costa Souza', {force:true})
        cy.contains('Tirar foto com a Webcam')

        const galleryPath = 'images/image1.jpg';

      cy.fixture(galleryPath).then(contentGallery => {
        cy.get('[name="files[field_profile_picture_0]"]')
        .upload([
          {fileContent: contentGallery, fileName: 'image1.jpg', mimeType: 'image/JPEG' },
          ]);
      });
      cy.wait(1000)
        cy.get('input[name="field_age[0][value]"]').type('17')
        cy.get('input[name="field_address[0][value]"]').type('Rua Yen Merigold, 23, Ciri')
        cy.contains('Salvar').click()



  
          cy.contains('Adicionar conteúdo').click()
          cy.contains('Alunos').click()
          cy.get('input[name="title[0][value]"]').type('Aloy Aurora', {force:true})
          cy.get('input[name="field_name[0][value]"]').type('Aloy Aurora da Costa Souza', {force:true})
          cy.contains('Tirar foto com a Webcam')
  
          const imagePath = 'images/image2.jpg';
  
        cy.fixture(imagePath).then(contentGallery => {
          cy.get('[name="files[field_profile_picture_0]"]')
          .upload([
            {fileContent: contentGallery, fileName: 'image2.jpg', mimeType: 'image/JPEG' },
            ]);
        });
        cy.wait(1000)
          cy.get('input[name="field_age[0][value]"]').type('15')
          cy.get('input[name="field_address[0][value]"]').type('Rua Yen Merigold, 23, Ciri')
          cy.contains('Salvar').click()




          cy.contains('Adicionar conteúdo').click()
          cy.contains('Alunos').click()
          cy.get('input[name="title[0][value]"]').type('Ellie Frazer', {force:true})
          cy.get('input[name="field_name[0][value]"]').type('Ellie Frazer da Costa Souza', {force:true})
          cy.contains('Tirar foto com a Webcam')
  
          const photoPath = 'images/image3.jpg';
  
        cy.fixture(photoPath).then(contentGallery => {
          cy.get('[name="files[field_profile_picture_0]"]')
          .upload([
            {fileContent: contentGallery, fileName: 'image3.jpg', mimeType: 'image/JPEG' },
            ]);
        });
        cy.wait(1000)
          cy.get('input[name="field_age[0][value]"]').type('15')
          cy.get('input[name="field_address[0][value]"]').type('Rua Yen Merigold, 23, Ciri')
          cy.contains('Salvar').click()

          cy.wait(2000)

          cy.contains('Início').click({force:true})

    })
})