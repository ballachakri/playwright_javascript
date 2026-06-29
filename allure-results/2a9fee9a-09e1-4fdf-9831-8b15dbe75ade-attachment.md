# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginTests.spec.js >> Login Tests >> Valid User Login
- Location: tests\LoginTests.spec.js:18:9

# Error details

```
TypeError: Cannot read properties of undefined (reading 'CommonHooks')
```

```
ReferenceError: allure is not defined
```

# Test source

```ts
  1  | import { aklure } from 'allure-playwright';
  2  | import PomManager from '../pom_manager/PomManager';
  3  | 
  4  | export default class CommonHooks {
  5  |     
  6  |     static beforeEach(page){
  7  |         return new PomManager(page);
  8  |     }
  9  | 
  10 |     static async afterEach(page) {
  11 |         const screenshot = await page.screenshot();
> 12 |         await allure.attachment('Screenshot' , screenshot , 'image/png');
     |         ^ ReferenceError: allure is not defined
  13 |         await page.close();
  14 |     }
  15 | }
  16 | 
  17 | 
```