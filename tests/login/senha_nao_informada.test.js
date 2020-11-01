module.exports = {

//'@disabled': true,

    'Senha não informada': (browser) => {
      
      let login = browser.page.login()

      login
          .with('zumbi@dospalmares.com.br', '')
          .waitForElementVisible('@alertInfo', 3000)
          .assert.containsText('@alertInfo', 'Opps. Cadê a senha?')
    }
}

