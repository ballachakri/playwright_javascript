import { expect } from '@playwright/test';

export default class CheckboxesPage {

    constructor(page) {
        this.page = page;
        this.uncheckedLocator = page.locator("input[type='checkbox']:first-child");
        this.checkedLocator = page.locator("input[type='checkbox']:last-child");
    }


        async navigateTo(path){
        await this.page.goto(path);
    }

    async clickUnCheckBox() {
        await this.uncheckedLocator.click();
    }

    async clickCheckedBox() {
        await this.checkedLocator.click();
    }

    async isFirstBoxChecked() {
        return await this.uncheckedLocator.isChecked();
    }

    async isSecondBoxChecked() {
        return await this.checkedLocator.isChecked();
    }
}