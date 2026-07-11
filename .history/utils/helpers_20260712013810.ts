import { Page, expect } from '@playwright/test';

export async function waitForPageReady(page: Page): Promise<void> {
  await page.waitForLoadState('domcontentloaded');
  await page.waitForLoadState('networkidle');
}

export async function assertVisibleText(page: Page, text: string): Promise<void> {
  await expect(page.getByText(text, { exact: false })).toBeVisible();
}
