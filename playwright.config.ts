import { defineConfig, devices } from "@playwright/test";

const testPort = Number(process.env.PORTFOLIO_TEST_PORT || 4181);
const baseURL = `http://127.0.0.1:${testPort}`;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  workers: 2,
  outputDir: `.playwright-runs/${Date.now()}-${process.pid}`,
  reporter: "list",
  use: { baseURL, trace: "retain-on-failure" },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    {
      name: "mobile",
      use: { ...devices["iPhone 13"], defaultBrowserType: "chromium" },
    },
  ],
  webServer: {
    command: "node scripts/serve-export.mjs",
    url: baseURL,
    env: { PORT: String(testPort) },
    reuseExistingServer: false,
  },
});
