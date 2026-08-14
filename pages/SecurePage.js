import { expect } from '@playwright/test';


export default class SecurePage{

    constructor(page) {
        this.page = page;
        this.messageLocator = page.locator("div[id='flash']");
    }

    async getMessage() {
          return await this.messageLocator.textContent();
    }

    async verifyUserLoggedIn(expectedMessage) {
        const actualMessage = await this.getMessage();
        expect(actualMessage).toContain(expectedMessage);

    }
}