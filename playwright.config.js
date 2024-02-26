// @ts-check
const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  timeout: 2000,
  testDir: "./tests/integration",
  fullyParallel: true,
  retries: 1,
  workers: 5,
  use: {
    baseURL: "http://127.0.0.1:8080",
    trace: "on-first-retry",
    testIdAttribute: 'test-id',
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "npm run http-server",
    url: "http://127.0.0.1:8080",
    reuseExistingServer: true,
  },
});
