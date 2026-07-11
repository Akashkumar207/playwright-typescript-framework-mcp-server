import { Page, expect } from '@playwright/test';

export class AdminPage {
  constructor(private readonly page: Page) {}

  async openAdminPage(): Promise<void> {
    await this.page.getByRole('link', { name: /^Admin$/i }).click();
    await expect(this.page.getByText(/^Admin$/i).first()).toBeVisible();
  }

  async verifyUserManagementVisible(): Promise<void> {
    await expect(this.page.getByText(/^User Management$/i).first()).toBeVisible();
  }
}
