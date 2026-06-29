import { expect } from '@playwright/test';
import CommonActions from '../utils/CommonActions';


export default class SecurePage {
    constructor(page) {
        this.actions = new CommonActions(page);
        this.messageLocator = "div[id='flash']";
    }

    async getMessage() {
          return await this.actions.getText(this.messageLocator);
    }

    async verifyUserLoggedIn(expectedMessage) {
        const actualMessage = await this.getMessage();
        expect(actualMessage).toContain(expectedMessage);

    }
}