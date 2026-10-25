import { test, expect } from "@playwright/test";

test("body copy and controls use readable sizes on phones and desktop", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  for (const selector of [
    ".hero-description",
    ".project-body > p",
    ".about-copy > p:not(.eyebrow)",
    ".capability > p",
    ".experience-item > p:not(.experience-org)",
    ".contact-description",
  ]) {
    const sizes = await page
      .locator(selector)
      .evaluateAll((elements) =>
        elements.map((element) =>
          parseFloat(getComputedStyle(element).fontSize),
        ),
      );
    expect(sizes.length).toBeGreaterThan(0);
    expect(
      sizes.every((size) => size >= 15),
      `${selector}: ${sizes.join(", ")}`,
    ).toBe(true);
  }
  expect(
    await page
      .locator(".hero-actions .button")
      .evaluate((element) => parseFloat(getComputedStyle(element).fontSize)),
  ).toBeGreaterThanOrEqual(13);
});

test("scroll reveal completes once and new filtered cards are registered", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-motion", "enabled");
  const about = page.locator(".about-copy");
  await expect(about).toHaveAttribute("data-reveal", "ready");
  await about.scrollIntoViewIfNeeded();
  await expect(about).toHaveAttribute("data-reveal", "complete");
  await expect(about).toHaveCSS("opacity", "1");
  await page.getByRole("button", { name: "Tools", exact: true }).click();
  const firstCard = page.locator(".project-card").first();
  await firstCard.scrollIntoViewIfNeeded();
  await expect(firstCard).toHaveAttribute("data-reveal", "complete");
  await expect(page.locator(".project-card")).toHaveCount(2);
});

test("reduced motion disables reveal and live preference changes cancel motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-motion", "enabled");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("html")).toHaveAttribute("data-motion", "reduced");
  await expect(page.locator(".about-copy")).toHaveAttribute(
    "data-reveal",
    "static",
  );
  await expect(page.locator(".about-copy")).toHaveCSS("opacity", "1");
  const animated = await page
    .locator(".orbital-core")
    .evaluate((element) => getComputedStyle(element).animationDuration);
  expect(parseFloat(animated)).toBeLessThanOrEqual(0.01);
});

test("targeted hero and CTA glows are present", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page
      .locator(".hero-stage")
      .evaluate((element) => getComputedStyle(element, "::before").content),
  ).not.toBe("none");
  expect(
    await page
      .locator(".hero .serif-word")
      .evaluate((element) => getComputedStyle(element).textShadow),
  ).not.toBe("none");
  expect(
    await page
      .locator(".button-primary")
      .first()
      .evaluate((element) => getComputedStyle(element).boxShadow),
  ).not.toBe("none");
});
