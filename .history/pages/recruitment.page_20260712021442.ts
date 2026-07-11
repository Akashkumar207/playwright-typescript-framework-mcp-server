import { Page, expect } from '@playwright/test';

export class RecruitmentPage {
  constructor(private readonly page: Page) {}

  async openRecruitmentPage(): Promise<void> {
    await this.page.getByRole('link', { name: /^Recruitment$/i }).click();
    await expect(this.page.getByRole('heading', { name: /^Recruitment$/i })).toBeVisible();
  }

  async verifyCandidateListVisible(): Promise<void> {
    await expect(this.page.getByRole('tab', { name: /^Candidates$/i })).toBeVisible();
  }
}
