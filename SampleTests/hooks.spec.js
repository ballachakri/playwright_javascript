// import { test, expect } from '@playwright/test';
// import { chromium } from '@playwright/test';
// import { allure } from 'allure-playwright';


// let browser;
// let context;
// let page;

// test.beforeAll('Launch chrome browser', async () => {
//     browser = await chromium.launch();
//     console.log(`Before all : launch chromium`);
// });


// test.beforeEach('Create browser context', async () => {
//     context = await browser.newContext();
//     page = await context.newPage();
//     await page.goto("https://the-internet.herokuapp.com/");
//     console.log(`Before Each : launch new page`);
// });

// test('Click a link', async () => {
//     await page.locator("a[href='/abtest']").click();
//     console.log(`click the ab testing link`);

//     const scr = await page.screenshot();
//     await allure.attachment('click', scr, 'image/png');

//     const result = await page.locator("div[class='example'] h3").innerText();
//     // const result = await page.locator("div[class='example'] h3").textContent();
//     await expect(result).toContain(`A/B Test`);
//     // expect await page.locator("div[class='example'] h3").innerText();
//     console.log(`Result : `+result);

// });

// test.afterEach('Close context and page', async () => {
//     await context.close();
//     await page.close();
//     console.log(`After Each : close context and page`);
//     await page.pause();
// });

// test.afterAll('Close browser', async () => {
//     await browser.close();
//     console.log(`After All : close browser`);
// });