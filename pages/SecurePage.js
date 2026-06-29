import { expect } from '@playwright/test';
import CommonActions from '../utils/CommonActions';


export default class SecurePage extends CommonActions{
    constructor(page) {
        super(page);
        this.messageLocator = "div[id='flash']";
    }

    async getMessage() {
          return await this.getText(this.messageLocator);
    }

    async verifyUserLoggedIn(expectedMessage) {
        const actualMessage = await this.getMessage();
        expect(actualMessage).toContain(expectedMessage);

    }
}