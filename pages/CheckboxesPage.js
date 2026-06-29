import { expect } from '@playwright/test';
import CommonActions from '../utils/CommonActions';

export default class CheckboxesPage {

    constructor(page) {
        this.actions = new CommonActions(page);
        this.uncheckedLocator = "input[type='checkbox']:first-child";
        this.checkedLocator = "input[type='checkbox']:last-child";
    }

    async navigate(url) {
        await this.actions.navigateTo(url);
    }

    async clickUnCheckBox() {
        await this.actions.page.click(this.uncheckedLocator);
    }

    async clickCheckedBox() {
        await this.actions.page.click(this.checkedLocator);
    }

    async isFirstBoxChecked() {
        return await this.actions.page.isChecked(this.uncheckedLocator);
    }

    async isSecondBoxChecked() {
        return await this.actions.page.isChecked(this.checkedLocator);
    }
}