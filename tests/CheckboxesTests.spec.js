import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import CheckboxesPage from '../pages/CheckboxesPage';

test.describe('Check boxes tests', () => {

    let checkboxespage;

    test.beforeEach(async ({ page }) => {
        checkboxespage = new CheckboxesPage(page)
        await checkboxespage.navigateTo("/checkboxes");
    })

    test.afterEach(async ({ page }) => {
        const scr = await page.screenshot();
        await allure.attachment('click', scr, 'image/png');
        await page.close();
    })

    test('Check - > unchecked', async () => {
        await checkboxespage.clickUnCheckBox();
        expect(await checkboxespage.isFirstBoxChecked()).toBe(true);
    })

    test('Uncheck - > checked', async () => {
        await checkboxespage.clickCheckedBox();
        expect(await checkboxespage.isSecondBoxChecked()).toBe(false);
    })
});
