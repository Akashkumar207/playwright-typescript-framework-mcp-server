import { test } from '@playwright/test';
import { LeavePage } from '../pages/leave.page';
import { loginAsAdmin } from '../utils/helpers';

test('Leave page opens successfully', async ({ page }) => {
  await loginAsAdmin(page);
  const leavePage = new LeavePage(page);
  await leavePage.openLeavePage();
  await leavePage.verifyLeaveListVisible();
});
