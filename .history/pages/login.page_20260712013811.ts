import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('/');
    await expect(this.page.locator('input[name="username"]')).toBeVisible();
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.locator('input[name="username"]').fill(username);
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async verifyLoggedIn(): Promise<void> {
    await expect(this.page.getByRole('heading', { name: /dashboard/i })).toBeVisible();
  }
}
