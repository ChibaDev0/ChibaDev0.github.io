import AxeBuilder from "@axe-core/playwright";
import { PROJECTS } from "../src/constants/projects";
import { test, expect } from "@playwright/test";

test("work-first portfolio has accessible project filters", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Ideas to interfaces.",
  );
  await page.getByRole("button", { name: "Tools", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Tools", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".project-card")).not.toHaveCount(0);
  for (const card of await page.locator(".project-card").all()) {
    await expect(card).toHaveAttribute("data-category", "Tools");
  }
  await page.getByRole("button", { name: "All projects", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "MeowMatch", exact: true }),
  ).toBeVisible();
});

test("responsive navigation, contact and assets work without browser errors", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: "Open menu" }).click();
    await page
      .getByRole("navigation", { name: "Main navigation" })
      .getByRole("link", { name: "Selected work" })
      .click();
    await expect(
      page.getByRole("button", { name: "Open menu" }),
    ).toHaveAttribute("aria-expanded", "false");
  }
  await expect(page.locator("#projects")).toBeAttached();
  await expect(page.locator("#about")).toBeAttached();
  await expect(page.locator("#contact")).toBeAttached();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.locator("#contact").scrollIntoViewIfNeeded();
  await expect(
    page.getByRole("link", { name: "Message on Instagram" }),
  ).toBeVisible();
  // Real browser lazy-loading needs each preview to enter the viewport.
  // Jumping straight to Contact can leave mid-page images intentionally unloaded.
  for (const image of await page.locator("img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        image.evaluate(
          (element) =>
            element instanceof HTMLImageElement &&
            element.complete &&
            element.naturalWidth > 0,
        ),
      )
      .toBe(true);
    await image.evaluate((element) => (element as HTMLImageElement).decode());
  }
  expect(
    await page
      .locator("img")
      .evaluateAll((images) =>
        images.every(
          (image) =>
            image instanceof HTMLImageElement &&
            image.complete &&
            image.naturalWidth > 0,
        ),
      ),
  ).toBe(true);
  expect(errors).toEqual([]);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await expect(page.locator(".wordmark")).toBeInViewport();
  await page.screenshot({
    path: testInfo.outputPath(`portfolio-${testInfo.project.name}.png`),
    fullPage: true,
  });
});

test("mobile menu returns keyboard focus when dismissed with Escape", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "mobile");
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Open menu" });
  await menu.click();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "About", exact: true })
    .focus();
  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(menu).toBeFocused();
});

test("catalog contains the audited projects and no broken or private source links", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".project-card")).toHaveCount(PROJECTS.length);
  await expect(
    page.getByRole("heading", { name: "Muffin Shop", exact: true }),
  ).toHaveCount(0);
  for (const project of PROJECTS) {
    const card = page.locator(".project-card").filter({
      has: page.getByRole("heading", { name: project.name, exact: true }),
    });
    await expect(
      card.getByRole("link", { name: "Visit website", exact: true }),
    ).toHaveAttribute("href", project.href);
    if (project.status === "Login required")
      await expect(
        card.getByText("Login required", { exact: true }),
      ).toBeVisible();
    if (project.source)
      await expect(
        card.getByRole("link", { name: "Source code", exact: true }),
      ).toHaveAttribute("href", project.source);
    else
      await expect(
        card.getByRole("link", { name: "Source code", exact: true }),
      ).toHaveCount(0);
  }
  await expect(page).toHaveTitle(
    "Traiwit Kunrapeepat — Developer & Creative Builder",
  );
  const socialImage = await page.request.get("/images/social-card.png");
  expect(socialImage.status()).toBe(200);
});

test("layout fits small phones through wide desktops with reduced motion", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  for (const width of [320, 390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    await page.evaluate(
      () =>
        new Promise<void>((resolve) =>
          requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
        ),
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  expect(
    await page
      .locator("html")
      .evaluate((element) => getComputedStyle(element).scrollBehavior),
  ).toBe("auto");
});

test("WCAG A and AA accessibility scan has no detected violations", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});
