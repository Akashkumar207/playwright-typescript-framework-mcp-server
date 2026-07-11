import { test } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.page';
import { loginAsAdmin } from '../utils/helpers';

test('Dashboard page loads successfully', async ({ page }) => {
  await loginAsAdmin(page);
  const dashboardPage = new DashboardPage(page);
  await dashboardPage.verifyDashboardLoaded();
});
