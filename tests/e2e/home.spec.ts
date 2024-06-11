import { test, expect } from "@playwright/test";

test("homepage has expected content", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Thumbs Up/);
  await expect(page.locator("text=Kanye West")).toBeVisible();
});

test("test", async ({ page, goto }) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(page.getByRole("heading")).toHaveText("Welcome to Playwright!");
});
