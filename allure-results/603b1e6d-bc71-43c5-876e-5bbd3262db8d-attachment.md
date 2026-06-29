# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTests.spec.js >> Login Tests >> Invalid User Login
- Location: tests\LoginTests.spec.js:31:9

# Error details

```
TypeError: Cannot read properties of undefined (reading 'CommonHooks')
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { allure } from 'allure-playwright';
  3  | import PomManager from '../pom_manager/PomManager';
  4  | import CommonHooks from '../utils/CommonHooks';
  5  | 
  6  | let pm;
  7  | 
  8  | test.describe('Login Tests', async () => {
  9  | 
  10 |     test.beforeEach(async ({ page }) => {
> 11 |         pm.CommonHooks.beforeEach(page);
     |            ^ TypeError: Cannot read properties of undefined (reading 'CommonHooks')
  12 |     })
  13 | 
  14 |     test.afterEach(async ({ page }) => {
  15 |         await CommonHooks.afterEach(page);
  16 |     })
  17 | 
  18 |     test('Valid User Login', async () => {
  19 |         await pm.loginpage.navigate();
  20 |         await pm.loginpage.userlogin('tomsmith', 'SuperSecretPassword!');
  21 | 
  22 |         // Assertion is placed in SecurePage
  23 |         await pm.securepage.verifyUserLoggedIn('You logged into a secure area!');
  24 | 
  25 |         // Assert directly in test
  26 |         const msg = await pm.securepage.getMessage("div[id='flash']");
  27 |         expect(msg).toContain('You logged into a secure area!');
  28 | 
  29 |     });
  30 | 
  31 |     test('Invalid User Login', async () => {
  32 |         await pm.loginpage.navigate();
  33 |         await pm.loginpage.userlogin('invalidUser', 'InvalidPassowrd');
  34 | 
  35 |         // Assertion i placed in SecurePage
  36 |         await pm.securepage.verifyUserLoggedIn('Your username is invalid!');
  37 | 
  38 |         // Assert directly in test
  39 |         const msg = await pm.securepage.getMessage("div[id='flash']");
  40 |         expect(msg).toContain('Your username is invalid!');
  41 | 
  42 |     });
  43 | 
  44 | });
```