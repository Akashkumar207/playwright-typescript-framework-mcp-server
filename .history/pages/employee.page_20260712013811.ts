import { Page, expect } from '@playwright/test';

export class EmployeePage {
  constructor(private readonly page: Page) {}

  async openEmployeeList(): Promise<void> {
    await this.page.getByRole('menuitem', { name: /pim/i }).click();
    await this.page.getByRole('menuitem', { name: /employee list/i }).click();
  }

  async addEmployee(firstName: string, lastName: string): Promise<void> {
    await this.page.getByRole('button', { name: /add/i }).click();
    await this.page.locator('input[name="firstName"]').fill(firstName);
    await this.page.locator('input[name="lastName"]').fill(lastName);
    await this.page.getByRole('button', { name: /save/i }).click();
  }

  async verifyEmployeeCreated(firstName: string, lastName: string): Promise<void> {
    await expect(this.page.getByText(`${firstName} ${lastName}`, { exact: true })).toBeVisible();
  }

  async logout(): Promise<void> {
    await this.page.getByAltText('profile picture').click();
    await this.page.getByRole('menuitem', { name: /logout/i }).click();
  }
}
