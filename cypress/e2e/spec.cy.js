describe('Teste  de Login', () => {
  it('Login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('gustavo@hotmail.com')
    cy.get('[data-testid="senha"]').type('12345')
    cy.get('[data-testid="entrar"]').click()
    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
    cy.get('[data-testid="product-increase-quantity"]').click()
    cy.get('[data-testid="limparLista"]').click()
    cy.get('[data-testid="shopping-cart-empty-message"]').contains('Seu carrinho está vazio')

  })

  it('Login com falha', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('gustavo@hotmail.com')
    cy.get('[data-testid="senha"]').type('12')
    cy.get('[data-testid="entrar"]').click()
    cy.get('.alert > :nth-child(2)').contains('Email e/ou senha inválidos')

  })

   /*it.only('Teste cadastro', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').type('Alandin')
    cy.get('[data-testid="email"]').type('aladinho@hotmail.com')
    cy.get('[data-testid="password"]').type('tapete')
    cy.get('[data-testid="entrar"]').click()

  })*/

  /*it('Login Alandin', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('aladinho@hotmail.com')
    cy.get('[data-testid="senha"]').type('tapete')
    cy.get('[data-testid="entrar"]').click()
    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
    cy.get('[data-testid="product-increase-quantity"]').click()
    cy.get('[data-testid="limparLista"]').click()
    cy.get('[data-testid="shopping-cart-empty-message"]').contains('Seu carrinho está vazio')

  })*/

})