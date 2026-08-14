import { test } from '@playwright/test';
import { allure } from 'allure-playwright';

export class Hooks {

    static setupHooks() {
        
        // ✅ Runs BEFORE every test
        test.beforeEach(async ({ page }) => {
            // Browser opens automatically — navigate to base URL
            await page.goto('/');
        });

        // ✅ Runs AFTER every test — screenshot + close browser
        test.afterEach(async ({ page }) => {
            const screenshot = await page.screenshot({ fullPage: true });
            await allure.attachment('Test Screenshot', screenshot, 'image/png');
            await page.close();
        });
    }
}