import { test, expect } from '@playwright/test'

test('app loads with four-panel layout', async ({ page }) => {
  await page.goto('/')

  // Verify the four panels are present
  await expect(page.locator('.sidebar')).toBeVisible()
  await expect(page.locator('.note-list')).toBeVisible()
  await expect(page.locator('.editor')).toBeVisible()
  await expect(page.locator('.inspector')).toBeVisible()
})

test('sidebar shows navigation items', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('Laputa')).toBeVisible()
  await expect(page.getByText('All Notes')).toBeVisible()
})
