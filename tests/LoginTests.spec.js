import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import PomManager from '../pom_manager/PomManager';

let pm;

test.describe('Login Tests', async () => {

    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page);
        await pm.loginpage.navigateTo("https://the-internet.herokuapp.com/login");
    })

    test.afterEach(async ({ page }) => {
        const scr = await page.screenshot();
        await allure.attachment('click', scr, 'image/png');
        await page.close();
    })

    test('Valid User Login', async () => {
        await pm.loginpage.userlogin('tomsmith', 'SuperSecretPassword!');
        // Assertion is placed in SecurePage
        await pm.securepage.verifyUserLoggedIn('You logged into a secure area!');
        // Assert directly in test
        const msg = await pm.securepage.getMessage("div[id='flash']");
        expect(msg).toContain('You logged into a secure area!');

    });

    test('Invalid User Login', async () => {
        await pm.loginpage.userlogin('invalidUser', 'InvalidPassowrd');
        // Assertion placed in SecurePage
        await pm.securepage.verifyUserLoggedIn('Your username is invalid!');
        // Assert directly in test
        const msg = await pm.securepage.getMessage("div[id='flash']");
        expect(msg).toContain('Your username is invalid!');
    });
});