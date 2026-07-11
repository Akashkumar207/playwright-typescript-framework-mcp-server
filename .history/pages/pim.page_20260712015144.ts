import { Page, expect } from '@playwright/test';

export class PIMPage {
  constructor(private readonly page: Page) {}

  async openEmployeeList(): Promise<void> {
    await this.page.getByRole('link', { name: /pim/i }).click();
    await this.page.getByRole('link', { name: /employee list/i }).click();
  }

  async verifyEmployeeListVisible(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: /employee list/i })).toBeVisible();
  }
}
