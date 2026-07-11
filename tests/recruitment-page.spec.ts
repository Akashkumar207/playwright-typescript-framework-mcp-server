import { test } from '@playwright/test';
import { RecruitmentPage } from '../pages/recruitment.page';
import { loginAsAdmin } from '../utils/helpers';

test('Recruitment page opens successfully', async ({ page }) => {
  await loginAsAdmin(page);
  const recruitmentPage = new RecruitmentPage(page);
  await recruitmentPage.openRecruitmentPage();
  await recruitmentPage.verifyCandidateListVisible();
});
