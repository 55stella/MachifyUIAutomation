import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    get usernameEle () {
        return $("#login-username");
    }

    get passwordEle () {
        return $("login-password");
    }

    get loginBtn () {
        return $("button[type='submit']");
    }
    get signUpBtn() {
        return $("button[type='button']");
    }
    

    // methods 
    open () {
        return super.open('login');
    }
    async loginFn(username, password) {
        await this.sendValue(this.usernameEle, username)
        await this.sendValue(this.passwordEle, password)
        await this.click(this.loginBtn)
    }
    async clickSignupBtn() {
        await this.click(this.signUpBtn)
    }
}

export default new LoginPage();
