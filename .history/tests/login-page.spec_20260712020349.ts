import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { waitForPageReady } from '../utils/helpers';

test('Login page can open and authenticate admin user', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await waitForPageReady(page);
  await loginPage.login('Admin', 'admin123');
  await loginPage.verifyLoggedIn();
});
