module.exports = {

    

//'@disabled': true,

    'Senha incorreta':  (browser) => {
        
        let login = browser.page.login()

        login
            .with('zumbi@dospalmares.com.br', 'abc123')
            .waitForElementVisible('@alertDanger', 3000)
            .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')
    }
}

