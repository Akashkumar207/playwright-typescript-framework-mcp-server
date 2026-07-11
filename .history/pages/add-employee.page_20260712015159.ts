import { Page, expect } from '@playwright/test';

export class AddEmployeePage {
  constructor(private readonly page: Page) {}

  async openAddEmployeeForm(): Promise<void> {
    await this.page.getByRole('button', { name: /add/i }).click();
  }

  async fillEmployeeDetails(firstName: string, lastName: string): Promise<void> {
    await this.page.locator('input[name="firstName"]').fill(firstName);
    await this.page.locator('input[name="lastName"]').fill(lastName);
  }

  async saveEmployee(): Promise<void> {
    await this.page.getByRole('button', { name: /save/i }).click();
  }

  async verifySuccessMessage(): Promise<void> {
    await expect(this.page.getByText(/saved/i)).toBeVisible();
  }
}
