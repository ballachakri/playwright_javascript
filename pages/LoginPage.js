import { expect } from '@playwright/test';


export default class LoginPage {

    constructor(page) {
        this.page = page;
        this.usernameLocator = page.locator("input[id='username']");
        this.passwordLocator = page.locator("input[id='password']");
        this.submitButtonLocator = page.locator("button[type='submit']")
    }

    async navigateTo(path){
        await this.page.goto(path)
    }

    async enterUserName(username, password) {
        await this.usernameLocator.fill(username);
    }

    async enterPassword(password){
        await this.passwordLocator.fill(password);
    }

    async clickSubmitButton(){
        await this.submitButtonLocator.click();
    }
    
}