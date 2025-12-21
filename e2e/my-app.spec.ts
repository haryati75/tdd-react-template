import { test, expect } from "@playwright/test";

test.describe("React TDD Template App", () => {
  test("has correct page title", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/React TDD Template/);
  });

  test("displays initial counter state", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: "ReactTS Project Template" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /counter: 0/i })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: /increment/i })
    ).toBeVisible();
    await expect(page.getByRole("button", { name: /reset/i })).toBeVisible();
  });

  test("increments counter when button is clicked", async ({ page }) => {
    await page.goto("/");

    const button = page.getByRole("button", { name: /increment/i });

    await button.click();

    await expect(
      page.getByRole("heading", { name: /counter: 1/i })
    ).toBeVisible();
  });

  test("increments counter multiple times", async ({ page }) => {
    await page.goto("/");

    const button = page.getByRole("button", { name: /increment/i });

    await button.click();
    await button.click();
    await button.click();

    await expect(
      page.getByRole("heading", { name: /counter: 3/i })
    ).toBeVisible();
  });

  test("maintains counter state during interaction", async ({ page }) => {
    await page.goto("/");

    const button = page.getByRole("button", { name: /increment/i });

    // Verify initial state
    await expect(
      page.getByRole("heading", { name: /counter: 0/i })
    ).toBeVisible();

    // Click and verify each increment
    await button.click();
    await expect(
      page.getByRole("heading", { name: /counter: 1/i })
    ).toBeVisible();

    await button.click();
    await expect(
      page.getByRole("heading", { name: /counter: 2/i })
    ).toBeVisible();

    await button.click();
    await expect(
      page.getByRole("heading", { name: /counter: 3/i })
    ).toBeVisible();
  });

  test("resets counter to 0 when reset button is clicked", async ({ page }) => {
    await page.goto("/");

    const incrementButton = page.getByRole("button", { name: /increment/i });
    const resetButton = page.getByRole("button", { name: /reset/i });

    // Increment counter
    await incrementButton.click();
    await incrementButton.click();
    await expect(
      page.getByRole("heading", { name: /counter: 2/i })
    ).toBeVisible();

    // Reset counter
    await resetButton.click();
    await expect(
      page.getByRole("heading", { name: /counter: 0/i })
    ).toBeVisible();
  });

  test("can increment, reset, and increment again", async ({ page }) => {
    await page.goto("/");

    const incrementButton = page.getByRole("button", { name: /increment/i });
    const resetButton = page.getByRole("button", { name: /reset/i });

    // First increment cycle
    await incrementButton.click();
    await incrementButton.click();
    await expect(
      page.getByRole("heading", { name: /counter: 2/i })
    ).toBeVisible();

    // Reset
    await resetButton.click();
    await expect(
      page.getByRole("heading", { name: /counter: 0/i })
    ).toBeVisible();

    // Second increment cycle
    await incrementButton.click();
    await expect(
      page.getByRole("heading", { name: /counter: 1/i })
    ).toBeVisible();
  });
})
