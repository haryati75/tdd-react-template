import { test, expect } from "@playwright/test";

test.describe("Smoke", () => {
  test("loads app and shows counter + buttons", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: /counter: 0/i })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /increment/i })
    ).toBeVisible();
    await expect(page.getByRole("button", { name: /reset/i })).toBeVisible();
  });

  test("increments once", async ({ page }) => {
    await page.goto("/");
    const incrementBtn = page.getByRole("button", { name: /increment/i });
    await incrementBtn.click();
    await expect(
      page.getByRole("heading", { name: /counter: 1/i })
    ).toBeVisible();
  });

  test("resets to zero", async ({ page }) => {
    await page.goto("/");
    const incrementBtn = page.getByRole("button", { name: /increment/i });
    const resetBtn = page.getByRole("button", { name: /reset/i });
    await incrementBtn.click();
    await incrementBtn.click();
    await resetBtn.click();
    await expect(
      page.getByRole("heading", { name: /counter: 0/i })
    ).toBeVisible();
  });
});
