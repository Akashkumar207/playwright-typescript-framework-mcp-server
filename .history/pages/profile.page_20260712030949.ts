import { Page, expect } from '@playwright/test';

export class ProfilePage {
  constructor(private readonly page: Page) {}

  async openProfileMenu(): Promise<void> {
    const avatar = this.page.getByRole('banner').getByRole('img', { name: 'profile picture' });
    await expect(avatar).toBeVisible({ timeout: 30_000 });
    await avatar.click();
  }

  async logout(): Promise<void> {
    await this.page.getByRole('menuitem', { name: /logout/i }).click();
  }

  async verifyLoggedOut(): Promise<void> {
    await expect(this.page.getByRole('button', { name: /login/i })).toBeVisible();
  }
}
