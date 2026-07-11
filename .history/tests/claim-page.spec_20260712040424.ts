import { test } from '@playwright/test';
import { ClaimPage } from '../pages/claim.page';
import { loginAsAdmin } from '../utils/helpers';

test('Claim page opens successfully', async ({ page }) => {
  await loginAsAdmin(page);

  const claimPage = new ClaimPage(page);
  await claimPage.openClaimPage();
  await claimPage.verifyClaimPageLoaded();
});
