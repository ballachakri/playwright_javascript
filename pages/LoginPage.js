import { expect } from '@playwright/test';
import CommonActions from '../utils/CommonActions';

export default class LoginPage extends CommonActions{

    constructor(page) {
        super(page);
        this.usernameLocator = "input[id='username']";
        this.passwordLocator = "input[id='password']";
    }

    async userlogin(username, password) {
        await this.enterText(this.usernameLocator, username);
        await this.enterText(this.passwordLocator, password);
        await this.click("button[type='submit']");
    }
}