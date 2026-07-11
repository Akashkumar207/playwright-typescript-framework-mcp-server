import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private readonly page: Page) {}

  async verifyDashboardLoaded(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: /dashboard/i })).toBeVisible();
    await expect(this.page.locator('.oxd-topbar-header')).toBeVisible();
  }

  async openMenuItem(menuName: string): Promise<void> {
    await this.page.getByRole('link', { name: new RegExp(menuName, 'i') }).first().click();
  }

  async logout(): Promise<void> {
    await this.page.getByAltText('profile picture').click();
    await this.page.getByRole('menuitem', { name: /logout/i }).click();
  }
}
