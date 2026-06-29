import { expect } from '@playwright/test';
import CommonActions from '../utils/CommonActions';

export default class LoginPage {

    constructor(page) {
        this.actions = new CommonActions(page);
        this.usernameLocator = "input[id='username']";
        this.passwordLocator = "input[id='password']";
    }

    async navigate(url) {
        await this.actions.navigateTo(url);
    }

    async userlogin(username, password) {
        await this.actions.enterText(this.usernameLocator, username);
        await this.actions.enterText(this.passwordLocator, password);
        await this.actions.click("button[type='submit']");
    }
}