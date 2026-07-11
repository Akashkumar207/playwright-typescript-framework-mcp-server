import { test } from '@playwright/test';
import { DirectoryPage } from '../pages/directory.page';
import { loginAsAdmin } from '../utils/helpers';

test('Directory page opens successfully', async ({ page }) => {
  await loginAsAdmin(page);
  const directoryPage = new DirectoryPage(page);
  await directoryPage.openDirectoryPage();
  await directoryPage.searchEmployee('John');
});
