import { Page, expect } from '@playwright/test';

export class LeavePage {
  constructor(private readonly page: Page) {}

  async openLeavePage(): Promise<void> {
    await this.page.getByRole('link', { name: /^Leave$/i }).click();
    await expect(this.page.getByRole('heading', { name: /leave/i })).toBeVisible();
  }

  async verifyLeaveListVisible(): Promise<void> {
    await expect(this.page.getByText(/leave list/i)).toBeVisible();
  }
}
