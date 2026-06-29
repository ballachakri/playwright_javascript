import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import PomManager from '../pom_manager/PomManager';
// import CommonHooks from '../utils/CommonHooks';

let pm;

test.describe('Check boxes tests', () => {
    test.beforeEach(async ({ page }) => {
       pm = new PomManager(page);
    })

    test.afterEach(async ({ page }) => {
        await page.close();
    })

    test('Check - > unchecked', async () => {
        await pm.checkboxespage.navigate("https://the-internet.herokuapp.com/checkboxes");
        await pm.checkboxespage.clickUnCheckBox();
        expect(await pm.checkboxespage.isFirstBoxChecked()).toBe(true);
    })

    test('Uncheck - > checked', async () => {
        await pm.loginpage.navigate("https://the-internet.herokuapp.com/checkboxes");
        await pm.checkboxespage.clickCheckedBox();
        expect(await pm.checkboxespage.isSecondBoxChecked()).toBe(false);
    })

});
