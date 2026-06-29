import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import PomManager from '../pom_manager/PomManager';

let pm;

test.describe('Check boxes tests', () => {

    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page);
        await pm.checkboxespage.navigateTo("https://the-internet.herokuapp.com/checkboxes");
    })

    test.afterEach(async ({ page }) => {
        const scr = await page.screenshot();
        await allure.attachment('click', scr, 'image/png');
        await page.close();
    })

    test('Check - > unchecked', async () => {
        await pm.checkboxespage.clickUnCheckBox();
        expect(await pm.checkboxespage.isFirstBoxChecked()).toBe(true);
    })

    test('Uncheck - > checked', async () => {
        await pm.checkboxespage.clickCheckedBox();
        expect(await pm.checkboxespage.isSecondBoxChecked()).toBe(false);
    })
});
