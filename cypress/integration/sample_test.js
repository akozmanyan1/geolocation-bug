describe('Location testing', function() {
        it('Location', function() {
            cy.visit('http://localhost:8080/') 
            cy.get('#location').click()
            
        })
})        