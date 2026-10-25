import { test, expect } from "@playwright/test";

test("Dily Shop is described as my own clothing store and uses its custom domain", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const card = page.locator(".project-card").filter({
    has: page.getByRole("heading", { name: "Dily Shop", exact: true }),
  });
  await expect(card.locator(".project-body > p")).toContainText(
    "My own clothing store",
  );
  await expect(card.locator(".project-visual")).toHaveAttribute(
    "href",
    "https://dilyshopth.com",
  );
  await expect(
    card.getByRole("link", { name: "Visit website", exact: true }),
  ).toHaveAttribute("href", "https://dilyshopth.com");
  await expect(card.locator(".preview-chrome")).toContainText("dilyshopth.com");
  await expect(card.locator(".preview-chrome")).not.toContainText("vercel.app");
});
