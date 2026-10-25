import { test, expect } from "@playwright/test";
import sharp from "sharp";

test("ambient hero light crosses the content margins without a rectangular seam", async ({
  page,
}, testInfo) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1900, height: 1000 });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: testInfo.outputPath("hero-soft-glow.png"),
    scale: "css",
    animations: "disabled",
  });
  // Isolate only the actual ambient background, preserving the original layout.
  await page.addStyleTag({
    content: ".hero > * { visibility: hidden !important; }",
  });
  const hero = await page.locator(".hero").boundingBox();
  expect(hero).not.toBeNull();
  const { data, info } = await sharp(await page.screenshot({ scale: "css" }))
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const pixel = (x: number, y: number) =>
    Array.from(
      data.subarray(
        (y * info.width + x) * info.channels,
        (y * info.width + x) * info.channels + 3,
      ),
    );
  // Average seven neighboring pixels so Chromium gradient dithering (±1 RGB)
  // is not mistaken for a hard edge. A real rectangular jump survives averaging.
  const average = (x: number, y: number) =>
    [0, 1, 2].map((channel) => {
      let sum = 0;
      for (let offset = -3; offset <= 3; offset++)
        sum += pixel(x, y + offset)[channel];
      return sum / 7;
    });
  const left = Math.round(hero!.x);
  const right = Math.round(hero!.x + hero!.width);
  const jumps: number[] = [];
  for (const offset of [100, 180, 260, 340]) {
    const y = Math.round(hero!.y + offset);
    for (const edge of [left, right]) {
      const before = average(edge - 2, y);
      const after = average(edge + 2, y);
      jumps.push(
        Math.max(
          ...before.map((channel, index) => Math.abs(channel - after[index])),
        ),
      );
    }
  }
  expect(
    Math.max(...jumps),
    `content-margin RGB jumps: ${jumps.join(", ")}`,
  ).toBeLessThanOrEqual(1);
  const outside = pixel(left - 30, Math.round(hero!.y + 260));
  expect(
    outside.some((channel, index) => channel > [11, 12, 14][index]),
    "glow should extend outside the text container, not simply disappear",
  ).toBe(true);
});
