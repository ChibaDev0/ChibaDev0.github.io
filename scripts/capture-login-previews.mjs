import { chromium } from "@playwright/test";
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
const projects = [
  ["line-vault", "https://get-line-token.vercel.app"],
  ["meowmatch", "https://meowmatch-delta.vercel.app"],
  ["tour-partner-hub", "https://tour-partner-hub.vercel.app"],
];
await mkdir("public/images/projects", { recursive: true });
const browser = await chromium.launch({ headless: true });
try {
  for (const [slug, url] of projects) {
    const page = await browser.newPage({
      viewport: { width: 1280, height: 800 },
      deviceScaleFactor: 1,
    });
    const response = await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 45000,
    });
    await page.waitForURL(/login/, { timeout: 30000 });
    await page.getByRole("heading").first().waitFor({ state: "visible" });
    await page.evaluate(() => document.fonts.ready);
    const image = await page.screenshot({ animations: "disabled" });
    await sharp(image)
      .webp({ quality: 82 })
      .toFile(`public/images/projects/${slug}.webp`);
    console.log(
      JSON.stringify({
        slug,
        status: response?.status(),
        url: page.url(),
        title: await page.title(),
        screenshot: `public/images/projects/${slug}.webp`,
      }),
    );
    await page.close();
  }
} finally {
  await browser.close();
}
