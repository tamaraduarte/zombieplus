module.exports = {

    

//'@disabled': true,

    'Email incorreto': (browser) => {
      
      let login = browser.page.login()

     login
          .with('404@yahoo.com.br', 'pwd123')
          .waitForElementVisible('@alertDanger', 3000)
          .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')
    }
}

