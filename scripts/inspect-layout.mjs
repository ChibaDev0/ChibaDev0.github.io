import { chromium } from "@playwright/test";
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage();
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("http://127.0.0.1:4173");
  for (const width of [320, 390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    console.log(
      JSON.stringify(
        await page.evaluate(() => ({
          width: innerWidth,
          media: matchMedia("(max-width: 760px)").matches,
          computed: [".hero", ".hero-art", ".build-note"].map((selector) => {
            const e = document.querySelector(selector);
            const c = getComputedStyle(e);
            return {
              selector,
              width: c.width,
              grid: c.gridTemplateColumns,
              overflow: c.overflow,
              transform: c.transform,
            };
          }),
          scrollWidth: document.documentElement.scrollWidth,
          overflowing: Array.from(document.querySelectorAll("body *"))
            .map((e) => ({
              tag: e.tagName,
              className: e.className,
              right: e.getBoundingClientRect().right,
              left: e.getBoundingClientRect().left,
            }))
            .filter((e) => e.right > innerWidth + 1 || e.left < -1),
        })),
        null,
        2,
      ),
    );
  }
} finally {
  await browser.close();
}
