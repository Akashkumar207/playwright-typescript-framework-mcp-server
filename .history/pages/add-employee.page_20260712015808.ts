import { Page, expect } from '@playwright/test';

export class AddEmployeePage {
  constructor(private readonly page: Page) {}

  async openAddEmployeeForm(): Promise<void> {
    await this.page.getByRole('button', { name: /^Add$/i }).click();
    await expect(this.page.getByRole('heading', { name: /^Add Employee$/i })).toBeVisible();
  }

  async fillEmployeeDetails(firstName: string, lastName: string): Promise<void> {
    await this.page.locator('input[name="firstName"]').fill(firstName);
    await this.page.locator('input[name="lastName"]').fill(lastName);
  }

  async saveEmployee(): Promise<void> {
    await this.page.getByRole('button', { name: /^Save$/i }).click();
  }

  async verifySuccessMessage(): Promise<void> {
    await expect(this.page.getByText(/saved/i)).toBeVisible();
  }
}
