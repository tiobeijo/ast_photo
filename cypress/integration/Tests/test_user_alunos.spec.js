describe('student registration', function() {
    it('student registration on AST website as users', function() {
        cy.visit('astphoto.docker.local')

        cy.contains('Entrar').click()
        cy.get('input[name="name"]').type('ast_dev')
        cy.get('input[name="pass"]').type('asteste21')

        cy.get('input[name="op"]').click()

        cy.get('a[id="toolbar-link-entity-user-collection"]').click()
        cy.get('a[class="button button-action button--primary button--small"]').click({force:true})

        const galleryPath = 'images/image2.jpg';

      cy.fixture(galleryPath).then(contentGallery => {
        cy.get('[name="files[user_picture_0]"]')
        .upload([
          {fileContent: contentGallery, fileName: 'image2.jpg', mimeType: 'image/JPEG' },
          ]);
      });

      cy.get('input[name="field_name[0][value]"]').type('Aloy Aurora da Costa Souza', {force:true})
      cy.get('input[name="mail"]').type('esse@mail.com', {force:true})
      cy.get('input[name="name"]').type('AloyAurora1', {force:true})
      cy.get('input[name="pass[pass1]"]').type('asteste21', {force:true})
      cy.get('input[name="pass[pass2]"]').type('asteste21', {force:true})
      cy.get('input[name="roles[student]"]').click()
      cy.get('input[name="field_adress[0][value]"]').type('Rua Yen Merigold, 23, Ciri')
      cy.get('input[id="edit-submit"]').click()

      cy.get('a[id="toolbar-link-entity-user-collection"]').click()


      //---------------------------//

      cy.get('a[class="button button-action button--primary button--small"]').click({force:true})

        const imagePath = 'images/image3.jpg';

      cy.fixture(imagePath).then(contentGallery => {
        cy.get('[name="files[user_picture_0]"]')
        .upload([
          {fileContent: contentGallery, fileName: 'image3.jpg', mimeType: 'image/JPEG' },
          ]);
      });

      cy.get('input[name="field_name[0][value]"]').type('Juno Zireael da Costa Souza', {force:true})
      cy.get('input[name="mail"]').type('this@mail.com', {force:true})
      cy.get('input[name="name"]').type('JunoZireael1', {force:true})
      cy.get('input[name="pass[pass1]"]').type('asteste21', {force:true})
      cy.get('input[name="pass[pass2]"]').type('asteste21', {force:true})
      cy.get('input[name="roles[student]"]').click()
      cy.get('input[name="field_adress[0][value]"]').type('Rua Yen Merigold, 23, Ciri')
      cy.get('input[id="edit-submit"]').click()

      cy.get('a[id="toolbar-link-entity-user-collection"]').click()

      //-----------------------//

      cy.get('a[class="button button-action button--primary button--small"]').click({force:true})

        const photoPath = 'images/image1.jpg';

      cy.fixture(photoPath).then(contentGallery => {
        cy.get('[name="files[user_picture_0]"]')
        .upload([
          {fileContent: contentGallery, fileName: 'image1.jpg', mimeType: 'image/JPEG' },
          ]);
      });

      cy.get('input[name="field_name[0][value]"]').type('Ellie Frazer da Costa Souza', {force:true})
      cy.get('input[name="mail"]').type('this@e-mail.com', {force:true})
      cy.get('input[name="name"]').type('EllieFrazer1', {force:true})
      cy.get('input[name="pass[pass1]"]').type('asteste21', {force:true})
      cy.get('input[name="pass[pass2]"]').type('asteste21', {force:true})
      cy.get('input[name="roles[student]"]').click()
      cy.get('input[name="field_adress[0][value]"]').type('Rua Yen Merigold, 23, Ciri')
      cy.get('input[id="edit-submit"]').click()

      cy.get('a[id="toolbar-link-entity-user-collection"]').click()

      cy.get('#edit-role').select('student')
      cy.get('input[id="edit-submit-user-admin-people"]').click()

      cy.get('th[id="view-name-table-column"]').click()

    })
})