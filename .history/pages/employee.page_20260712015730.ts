import { Page, expect } from '@playwright/test';

export class EmployeePage {
  constructor(private readonly page: Page) {}

  async openEmployeeList(): Promise<void> {
    await this.page.getByRole('link', { name: /^PIM$/i }).click();
    await this.page.waitForURL('**/pim/viewEmployeeList');
    await expect(this.page.getByRole('heading', { name: /Employee Information/i })).toBeVisible();
  }

  async addEmployee(firstName: string, lastName: string): Promise<void> {
    await this.page.getByRole('button', { name: /^Add$/i }).click();
    await expect(this.page.getByRole('heading', { name: /^Add Employee$/i })).toBeVisible();
    await this.page.locator('input[name="firstName"]').fill(firstName);
    await this.page.locator('input[name="lastName"]').fill(lastName);
    await this.page.getByRole('button', { name: /^Save$/i }).click();
  }

  async verifyEmployeeCreated(firstName: string, lastName: string): Promise<void> {
    const employeeRow = this.page.locator('.oxd-table-card').filter({
      hasText: firstName,
    }).filter({
      hasText: lastName,
    });

    await expect(employeeRow).toBeVisible({ timeout: 30_000 });
  }

  async logout(): Promise<void> {
    await this.page.getByAltText('profile picture').click();
    await this.page.getByRole('menuitem', { name: /^Logout$/i }).click();
  }
}
