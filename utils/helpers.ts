import { Page, expect } from '@playwright/test';

export async function waitForPageReady(page: Page): Promise<void> {
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('networkidle');
}

export async function loginAsAdmin(page: Page): Promise<void> {
  await page.goto('/');
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible();
}

export async function assertVisibleText(page: Page, text: string): Promise<void> {
  await expect(page.getByText(text, { exact: false })).toBeVisible();
}
