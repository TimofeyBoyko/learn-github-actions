import { expect, test } from "./e2e";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:3000");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Create Next App");
});
