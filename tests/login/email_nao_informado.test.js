module.exports = {

    

//'@disabled': true,

    'Email não informado': (browser) => {
      
      let login = browser.page.login()

      login
          .with('', 'pwd123')
          .waitForElementVisible('@alertInfo', 3000)
          .assert.containsText('@alertInfo', 'Opps. Cadê o email?')
    }
}

