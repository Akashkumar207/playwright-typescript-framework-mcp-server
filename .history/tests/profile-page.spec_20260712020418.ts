import { test } from '@playwright/test';
import { ProfilePage } from '../pages/profile.page';
import { loginAsAdmin } from '../utils/helpers';

test('Profile page can open and logout successfully', async ({ page }) => {
  await loginAsAdmin(page);
  const profilePage = new ProfilePage(page);
  await profilePage.openProfileMenu();
  await profilePage.logout();
  await profilePage.verifyLoggedOut();
});
