import { Page, expect } from '@playwright/test';

export class PIMPage {
  constructor(private readonly page: Page) {}

  async openEmployeeList(): Promise<void> {
    await this.page.getByRole('link', { name: /^PIM$/i }).click();
    await this.page.waitForURL('**/pim/viewEmployeeList');
    await expect(this.page.getByRole('heading', { name: /Employee Information/i })).toBeVisible();
  }

  async verifyEmployeeListVisible(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: /Employee Information/i })).toBeVisible();
  }
}
