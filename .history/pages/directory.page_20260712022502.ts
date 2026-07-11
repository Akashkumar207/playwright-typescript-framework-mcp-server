import { Page, expect } from '@playwright/test';

export class DirectoryPage {
  constructor(private readonly page: Page) {}

  async openDirectoryPage(): Promise<void> {
    await this.page.getByRole('link', { name: /^Directory$/i }).click();
    await expect(this.page.getByText(/^Directory$/i).first()).toBeVisible();
  }

  async searchEmployee(searchText: string): Promise<void> {
    await this.page.locator('input').first().fill(searchText);
  }
}
