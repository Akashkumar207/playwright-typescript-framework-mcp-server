import { Page, expect } from '@playwright/test';

export class ProfilePage {
  constructor(private readonly page: Page) {}

  async openProfileMenu(): Promise<void> {
    await this.page.getByAltText('profile picture').click();
  }

  async logout(): Promise<void> {
    await this.page.getByRole('menuitem', { name: /logout/i }).click();
  }

  async verifyLoggedOut(): Promise<void> {
    await expect(this.page.getByRole('button', { name: /login/i })).toBeVisible();
  }
}
