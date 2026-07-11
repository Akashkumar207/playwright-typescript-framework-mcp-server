import { Page, expect } from '@playwright/test';

export class DirectoryPage {
  constructor(private readonly page: Page) {}

  async openDirectoryPage(): Promise<void> {
    await this.page.getByRole('link', { name: /^Directory$/i }).click();
    await expect(this.page.locator('.oxd-table-filter-title')).toContainText('Directory');
  }

  async searchEmployee(searchText: string): Promise<void> {
    await this.page.locator('input[placeholder="Search Directory"]').fill(searchText);
  }
}
