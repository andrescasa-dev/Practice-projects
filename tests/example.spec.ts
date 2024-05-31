import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await expect(page.getByRole('cell', { name: 'id' })).toBeVisible();
  await page.getByRole('cell', { name: 'name' }).click();
  await page.getByRole('cell', { name: 'email' }).click();
  await page.getByRole('cell', { name: 'actions' }).click();
});