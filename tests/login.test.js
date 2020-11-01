
module.exports = {

  //ES6
  '@disabled' : true, 
    'Login com sucesso':  (browser) => {
        let userInfo = '.user .info span'
        browser
            .resizeWindow(1920, 1080)
            .url('http://zombie-web:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
            .setValue('input[name=password]', 'pwd123')
            .click('.login-button')
            .waitForElementVisible(userInfo, 3000)
            .assert.containsText(userInfo, 'Quilombo')
            .end();
    }
}

//Single Steps
   // 'Login com sucesso': function(browser){
    //    var userInfo = '.user .info span'
    //    
    //    browser
    //        .resizeWindow(1920, 1080)
    //        .url('http://zombie-web:5000/login')
    //        .waitForElementVisible('.card-login', 3000)
    //        .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
    //        .setValue('input[name=password]', 'pwd123')
    //        .click('.login-button')
    //        .waitForElementVisible(userInfo, 3000)
    //        .assert.containsText(userInfo, 'Quilombo')
    //        .end();
  //  },

//Multiple Steps (Cenários mais complexos)
//    'Dado que eu acesso a página de login': function (browser){
//        browser
//            .resizeWindow(1920, 1080)
//            .url('http://zombie-web:5000/login')
//            .waitForElementVisible('.card-login', 3000)
//    },
//    'Quando eu faço login com sucesso': function (browser){
//        browser
//        .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
//        .setValue('input[name=password]', 'pwd123')
//        .click('.login-button')
//    },
//    'Então devo ver meu nome na área logada': function (browser){
//        var userInfo = '.user .info span'
//        browser
//            .waitForElementVisible(userInfo, 3000)
//            .assert.containsText(userInfo, 'Quilombo')
//            .end(); //só pode ser inclusa no final
//    }


// Transpilação Babel ES6 => JavaScript padrão

