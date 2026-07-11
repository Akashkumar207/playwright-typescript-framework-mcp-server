import { test } from '@playwright/test';
import { AdminPage } from '../pages/admin.page';
import { loginAsAdmin } from '../utils/helpers';

test('Admin page opens successfully', async ({ page }) => {
  await loginAsAdmin(page);
  const adminPage = new AdminPage(page);
  await adminPage.openAdminPage();
  await adminPage.verifyUserManagementVisible();
});
