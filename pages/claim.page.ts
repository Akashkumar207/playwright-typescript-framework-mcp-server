import { Page, expect } from '@playwright/test';

export class ClaimPage {
  constructor(private readonly page: Page) {}

  async openClaimPage(): Promise<void> {
    await this.page.getByRole('link', { name: /^Claim$/i }).click();
    await expect(this.page).toHaveURL(/\/claim\/viewAssignClaim/);
  }

  async verifyClaimPageLoaded(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: /Assign Claim/i }).first()).toBeVisible({ timeout: 30_000 });
    await expect(this.page.getByText(/Assign Claim/i).first()).toBeVisible({ timeout: 30_000 });
  }
}
