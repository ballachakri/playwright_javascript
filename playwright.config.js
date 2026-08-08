// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.js',        //testMatch: '**/*.spec.js',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],

  use: {
    baseURL: 'https://the-internet.herokuapp.com', // ✅ PUT YOUR URL HERE
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    headless: true,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});