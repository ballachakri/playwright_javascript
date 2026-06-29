import { expect } from '@playwright/test';
import CommonActions from '../utils/CommonActions';

export default class CheckboxesPage extends CommonActions{

    constructor(page) {
        super(page); 
        this.uncheckedLocator = "input[type='checkbox']:first-child";
        this.checkedLocator = "input[type='checkbox']:last-child";
    }

    async clickUnCheckBox() {
        await this.page.click(this.uncheckedLocator);
    }

    async clickCheckedBox() {
        await this.page.click(this.checkedLocator);
    }

    async isFirstBoxChecked() {
        return await this.page.isChecked(this.uncheckedLocator);
    }

    async isSecondBoxChecked() {
        return await this.page.isChecked(this.checkedLocator);
    }
}