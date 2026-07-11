import { test } from '@playwright/test';
import { PIMPage } from '../pages/pim.page';
import { loginAsAdmin } from '../utils/helpers';

test('PIM page opens employee list', async ({ page }) => {
  await loginAsAdmin(page);
  const pimPage = new PIMPage(page);
  await pimPage.openEmployeeList();
  await pimPage.verifyEmployeeListVisible();
});
