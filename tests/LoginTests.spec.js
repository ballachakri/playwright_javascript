import { test, expect } from '@playwright/test';
import { Hooks } from '../hooks/Hooks'
import { allure } from 'allure-playwright';
import LoginPage from '../pages/LoginPage.js';
import SecurePage from '../pages/SecurePage.js';

Hooks.setupHooks();

test.describe('Login Tests', () => {

    let loginPage;
    let securePage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        securePage = new SecurePage(page);
        await loginPage.navigateTo("/login");
    });

    test('Valid User Login', async () => {
        await loginPage.enterUserName('tomsmith');
        await loginPage.enterPassword('SuperSecretPassword!');
        await loginPage.clickSubmitButton();

        // Assertion from SecurePage
        await securePage.verifyUserLoggedIn('You logged into a secure area!');
        // Direct assertion
        const msg = await securePage.getMessage("div[id='flash']");
        expect(msg).toContain('You logged into a secure area!');
    });

    test('Invalid User Login', async () => {
        await loginPage.enterUserName('invalidUser');
        await loginPage.enterPassword('invalidPassword!');
        await loginPage.clickSubmitButton();

        // Assertion from SecurePage
        await securePage.verifyUserLoggedIn('Your username is invalid!');
        // Direct assertion
        const msg = await securePage.getMessage("div[id='flash']");
        expect(msg).toContain('Your username is invalid!');
    });
});